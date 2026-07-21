import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import { errorHandler, notFoundHandler } from "@master-platform/shared-http";
import authRouter from "./auth/auth.routes";
import organizationRouter from "./organization/organization.routes";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(helmet());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN?.split(",") ?? ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    "/api/v1/auth",
    rateLimit({
        windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
        max: Number(process.env.RATE_LIMIT_MAX) || 100,
        standardHeaders: true,
        legacyHeaders: false,
    })
);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/organizations", organizationRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "auth-service" });
});

app.use(notFoundHandler);
app.use(errorHandler({ serviceName: "auth-service" }));

export default app;
