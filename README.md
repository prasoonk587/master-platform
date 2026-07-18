# master-platform

Turborepo monorepo. Backend services under `apps/*-service` and `apps/*-hub`, frontend under `apps/frontend-master`, shared packages under `packages/*`.

## Apps

| App                    | Port | Description |
| ---------------------- | ---- | ----------- |
| `apps/auth-service`    | 3001 | Express API |
| `apps/charging-hub`    | 3002 | Express API |
| `apps/frontend-master` | 3000 | Next.js app |

## Prerequisites

- Node.js >= 18, npm >= 9
- PostgreSQL running locally, reachable at `localhost:5432`

## Setup

Install dependencies (npm workspaces, run once from repo root):

```bash
npm install
```

Create the shared database (all services use one Postgres database named `master-platform`, with tables prefixed per service — see [CLAUDE.md](CLAUDE.md)):

```bash
createdb master-platform
```

Copy env files:

```bash
cp apps/auth-service/.env.example apps/auth-service/.env
cp apps/charging-hub/.env.example apps/charging-hub/.env
cp apps/frontend-master/.env.example apps/frontend-master/.env
```

Adjust `DATABASE_URL` and secrets in each `.env` if your local Postgres credentials differ from the defaults (`postgres`/`password`).

Generate the Prisma client and run migrations for `auth-service` (the only app with a Prisma schema so far):

```bash
npm run db:generate --workspace=apps/auth-service
npm run db:migrate --workspace=apps/auth-service
```

## Development

Run all apps in parallel (via `turbo dev`):

```bash
npm run dev
```

Run a single app instead:

```bash
npm run dev --workspace=apps/auth-service
npm run dev --workspace=apps/charging-hub
npm run dev --workspace=apps/frontend-master
```

Once running:

- auth-service: http://localhost:3001/health
- charging-hub: http://localhost:3002/health
- frontend-master: http://localhost:3000

## Other commands

```bash
npm run build         # turbo build (all apps/packages)
npm run lint          # turbo lint
npm run lint:fix       # turbo lint:fix
npm run type-check    # turbo type-check
npm run test          # turbo test
npm run format        # prettier --write
npm run format:check  # prettier --check
npm run clean         # turbo clean
```

Per-service Prisma commands (`auth-service`):

```bash
npm run db:generate --workspace=apps/auth-service
npm run db:migrate --workspace=apps/auth-service
npm run db:studio --workspace=apps/auth-service
```
