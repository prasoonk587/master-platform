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

## Adding a UI component

`packages/shared-ui` is consumed from source by `apps/frontend-master` (via `transpilePackages`, no build step) — never build a component directly inside `frontend-master`. To add a new component:

1. Generate it in `packages/shared-ui` with the shadcn CLI (`npx shadcn add <component>` from `packages/shared-ui`), which uses Radix Primitives as the base and the `radix-nova` style configured in `packages/shared-ui/components.json`.
2. Move the generated file into the atomic-design layout (`src/atoms|molecules|organisms/<Component>/<Component>.tsx`) and adapt it to match existing components (relative imports, `cva`-based `variant`/`size` props covering every variant the design needs, `data-slot`/`data-variant`/`data-size` attributes) — see `atoms/Button/Button.tsx` as the reference.
3. Add a barrel `index.ts` for the component and export it from the parent `atoms|molecules|organisms/index.ts`.
4. Add `<Component>.stories.tsx` covering every variant, size, and state (see `atoms/Button/Button.stories.tsx`).
5. Consume it in `frontend-master` via `@master-platform/shared-ui` — don't hand-roll a duplicate component in the app.

Inside `shared-ui`, use relative imports (`../../lib/utils`), not a `@/*`-style alias — `frontend-master` defines its own `@/*` alias, and since `shared-ui` compiles from source into the app's build, the app's alias wins and shadows the package's, breaking the build.
