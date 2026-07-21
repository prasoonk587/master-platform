import path from "node:path";
import swaggerJSDoc from "swagger-jsdoc";

const PORT = process.env.PORT ?? 3001;

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Auth Service API",
            version: "1.0.0",
            description: "Authentication API for the master-platform monorepo",
        },
        servers: [{ url: `http://localhost:${PORT}`, description: "Local development" }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [path.join(__dirname, "../*/*.routes.{ts,js}")],
});
