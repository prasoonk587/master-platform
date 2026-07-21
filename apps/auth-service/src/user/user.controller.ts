import type { Request, Response } from "express";
import { asyncHandler } from "@master-platform/shared-http";
import { prisma } from "../lib/prisma";
import { requireOrganizationId, tenantScope } from "../lib/tenant";

export const listUsers = asyncHandler(async (req: Request, res: Response) => {
    const organizationId = requireOrganizationId(req);

    const users = await prisma.user.findMany({
        where: tenantScope(organizationId),
        select: {
            id: true,
            email: true,
            mobile: true,
            name: true,
            organizationId: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: { createdAt: "desc" },
    });

    res.json({ users });
});
