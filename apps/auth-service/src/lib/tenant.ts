import type { Request } from "express";
import { ForbiddenError } from "@master-platform/shared-http";

export function requireOrganizationId(req: Request): string {
    const organizationId = req.user?.organizationId;
    if (!organizationId) {
        throw new ForbiddenError("User is not associated with an organization");
    }

    return organizationId;
}

export function tenantScope(organizationId: string) {
    return { organizationId, isDeleted: false };
}
