import type { Request, Response } from "express";
import { asyncHandler, ConflictError, UnauthorizedError } from "@master-platform/shared-http";
import { prisma } from "../lib/prisma";
import { comparePassword, hashPassword } from "../utils/password";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/jwt";
import type { LoginInput, RefreshInput, RegisterInput } from "./auth.schema";

export const register = asyncHandler(
    async (req: Request<unknown, unknown, RegisterInput>, res: Response) => {
        const { email, password, name, mobile } = req.body;

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            throw new ConflictError("Email is already registered");
        }

        const passwordHash = await hashPassword(password);
        const user = await prisma.user.create({
            data: { email, passwordHash, name, mobile },
        });

        res.status(201).json({
            user: { id: user.id, email: user.email, name: user.name, mobile: user.mobile },
        });
    }
);

export const login = asyncHandler(
    async (req: Request<unknown, unknown, LoginInput>, res: Response) => {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await comparePassword(password, user.passwordHash))) {
            throw new UnauthorizedError("Invalid email or password");
        }

        const accessToken = signAccessToken({ sub: user.id, email: user.email });
        const refreshToken = signRefreshToken({ sub: user.id });

        res.json({
            accessToken,
            refreshToken,
            user: { id: user.id, email: user.email, name: user.name },
        });
    }
);

export const refresh = asyncHandler(
    async (req: Request<unknown, unknown, RefreshInput>, res: Response) => {
        const { refreshToken } = req.body;

        let payload;
        try {
            payload = verifyRefreshToken(refreshToken);
        } catch {
            throw new UnauthorizedError("Invalid or expired refresh token");
        }

        const user = await prisma.user.findUnique({ where: { id: payload.sub } });
        if (!user) {
            throw new UnauthorizedError("Invalid or expired refresh token");
        }

        const accessToken = signAccessToken({ sub: user.id, email: user.email });
        const newRefreshToken = signRefreshToken({ sub: user.id });

        res.json({
            accessToken,
            refreshToken: newRefreshToken,
        });
    }
);
