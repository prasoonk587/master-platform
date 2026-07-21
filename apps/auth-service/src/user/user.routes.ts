import { Router } from "express";
import { listUsers } from "./user.controller";
import { authenticate } from "../middleware/authenticate";

const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     UserSummary:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         email:
 *           type: string
 *           format: email
 *         mobile:
 *           type: string
 *           nullable: true
 *         name:
 *           type: string
 *           nullable: true
 *         organizationId:
 *           type: string
 *           format: uuid
 *           nullable: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * /api/v1/users:
 *   get:
 *     summary: List users in the authenticated user's organization
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users in the caller's organization
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/UserSummary"
 *       401:
 *         description: Missing, invalid, or expired access token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       403:
 *         description: Authenticated user is not associated with an organization
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/", authenticate, listUsers);

export default router;
