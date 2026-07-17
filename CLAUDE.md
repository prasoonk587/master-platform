# master-platform

Turborepo monorepo. Backend services under `apps/*-service` and `apps/*-hub`, frontend under `apps/frontend-master`, shared packages under `packages/*`.

## Database

All backend services share a single PostgreSQL database named `master-platform` (see `DATABASE_URL` in each service's `.env.example`). There is no per-service database.

Because the database is shared, every table must be prefixed with its owning service's short name to avoid collisions, e.g.:

- `auth-service` → `auth_users`, `auth_sessions`, ...
- `charging-hub` → `charging_stations`, `charging_sessions`, ...

In Prisma schemas, set the prefix explicitly with `@@map(...)` on each model (Prisma does not prefix table names automatically from the model name), for example:

```prisma
model User {
  id String @id @default(uuid())

  @@map("auth_users")
}
```

A service may only read/write its own prefixed tables; there are no cross-service foreign keys.
