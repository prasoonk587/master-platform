import type { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "@master-platform/shared-http";
import { verifyAccessToken } from "../utils/jwt";

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

    if (!token) {
        next(new UnauthorizedError("Missing access token"));
        return;
    }

    try {
        req.user = verifyAccessToken(token);
    } catch {
        next(new UnauthorizedError("Invalid or expired access token"));
        return;
    }

    next();
}
