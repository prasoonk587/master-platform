import type { Request, Response } from "express";
import { asyncHandler, ConflictError, NotFoundError } from "@master-platform/shared-http";
import { prisma } from "../lib/prisma";
import type { CreateOrganizationInput, UpdateOrganizationInput } from "./organization.schema";

export const listOrganizations = asyncHandler(async (_req: Request, res: Response) => {
    const organizations = await prisma.organization.findMany({ orderBy: { createdAt: "desc" } });
    res.json({ organizations });
});

export const getOrganization = asyncHandler(async (req: Request<{ id: string }>, res: Response) => {
    const organization = await prisma.organization.findUnique({ where: { id: req.params.id } });
    if (!organization) {
        throw new NotFoundError("Organization not found");
    }

    res.json({ organization });
});

export const createOrganization = asyncHandler(
    async (req: Request<unknown, unknown, CreateOrganizationInput>, res: Response) => {
        const { name } = req.body;

        const existing = await prisma.organization.findUnique({ where: { name } });
        if (existing) {
            throw new ConflictError("Organization name is already in use");
        }

        const organization = await prisma.organization.create({ data: { name } });
        res.status(201).json({ organization });
    }
);

export const updateOrganization = asyncHandler(
    async (req: Request<{ id: string }, unknown, UpdateOrganizationInput>, res: Response) => {
        const existing = await prisma.organization.findUnique({ where: { id: req.params.id } });
        if (!existing) {
            throw new NotFoundError("Organization not found");
        }

        if (req.body.name && req.body.name !== existing.name) {
            const nameTaken = await prisma.organization.findUnique({
                where: { name: req.body.name },
            });
            if (nameTaken) {
                throw new ConflictError("Organization name is already in use");
            }
        }

        const organization = await prisma.organization.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json({ organization });
    }
);

export const deleteOrganization = asyncHandler(
    async (req: Request<{ id: string }>, res: Response) => {
        const existing = await prisma.organization.findUnique({ where: { id: req.params.id } });
        if (!existing) {
            throw new NotFoundError("Organization not found");
        }

        await prisma.organization.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
);
