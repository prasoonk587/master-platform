import jwt, { type SignOptions } from "jsonwebtoken";

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} environment variable is not set`);
    }
    return value;
}

const JWT_SECRET = requireEnv("JWT_SECRET");
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "15m";
const REFRESH_TOKEN_SECRET = requireEnv("REFRESH_TOKEN_SECRET");
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d";

export interface AccessTokenPayload {
    sub: string;
    email: string;
}

export interface RefreshTokenPayload {
    sub: string;
}

export function signAccessToken(payload: AccessTokenPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as SignOptions);
}

export function signRefreshToken(payload: RefreshTokenPayload): string {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    } as SignOptions);
}

export function verifyRefreshToken(token: string): RefreshTokenPayload {
    return jwt.verify(token, REFRESH_TOKEN_SECRET) as RefreshTokenPayload;
}
