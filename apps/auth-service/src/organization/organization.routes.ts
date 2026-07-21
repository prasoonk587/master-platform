import { Router } from "express";
import {
    createOrganization,
    deleteOrganization,
    getOrganization,
    listOrganizations,
    updateOrganization,
} from "./organization.controller";
import { validateBody } from "../middleware/validate";
import { createOrganizationSchema, updateOrganizationSchema } from "./organization.schema";

const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * /api/v1/organizations:
 *   get:
 *     summary: List organizations
 *     tags: [Organizations]
 *     responses:
 *       200:
 *         description: List of organizations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 organizations:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Organization"
 *   post:
 *     summary: Create an organization
 *     tags: [Organizations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Organization created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 organization:
 *                   $ref: "#/components/schemas/Organization"
 *       409:
 *         description: Organization name already in use
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       422:
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/", listOrganizations);
router.post("/", validateBody(createOrganizationSchema), createOrganization);

/**
 * @openapi
 * /api/v1/organizations/{id}:
 *   get:
 *     summary: Get an organization by id
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Organization found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 organization:
 *                   $ref: "#/components/schemas/Organization"
 *       404:
 *         description: Organization not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *   patch:
 *     summary: Update an organization
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Organization updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 organization:
 *                   $ref: "#/components/schemas/Organization"
 *       404:
 *         description: Organization not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       409:
 *         description: Organization name already in use
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       422:
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *   delete:
 *     summary: Delete an organization
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       204:
 *         description: Organization deleted
 *       404:
 *         description: Organization not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/:id", getOrganization);
router.patch("/:id", validateBody(updateOrganizationSchema), updateOrganization);
router.delete("/:id", deleteOrganization);

export default router;
