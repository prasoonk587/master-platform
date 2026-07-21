-- AlterTable
ALTER TABLE "auth_users" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "organizationId" TEXT;

-- AddForeignKey
ALTER TABLE "auth_users" ADD CONSTRAINT "auth_users_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "auth_organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
