import type { ErrorRequestHandler } from "express";
import { AppError } from "./AppError";

export interface ErrorHandlerOptions {
    /** Name of the service, included in error logs to trace which service raised an error. */
    serviceName: string;
}

// Must be registered last (after routes and notFoundHandler) for Express to treat it as an error handler.
export function errorHandler({ serviceName }: ErrorHandlerOptions): ErrorRequestHandler {
    return (err, _req, res, _next) => {
        const isAppError = err instanceof AppError;
        const statusCode = isAppError ? err.statusCode : 500;
        const isOperational = isAppError && err.isOperational;

        if (!isOperational) {
            console.error(`[${serviceName}]`, err);
        }

        res.status(statusCode).json({
            error: {
                message: isOperational ? err.message : "Internal server error",
                ...(isAppError && err.details !== undefined ? { details: err.details } : {}),
            },
        });
    };
}
