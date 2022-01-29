import express from "express";

import {
    createComment,
    createTopic, createUser,
    getTopics,
} from "../controllers";

const router = express.Router();

router.get('/', (
    request,
    response
) => {
    response.status(200).json({
        hello: 'world!'
    });
});
/**
 * @openapi
 * /forum/topic:
 *   get:
 *     tags: ['Forum']
 *     description: Получение топиков
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Topic'
 */
router.get("/forum/topic", getTopics);

/**
 * @openapi
 * /forum/topic:
 *   post:
 *     tags: ['Forum']
 *     description: Добавление топика
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Topic'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 */
router.post("/forum/topic", createTopic);

/**
 * @openapi
 * /forum/comment:
 *   post:
 *     tags: ['Forum']
 *     description: Добавление комментария
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
router.post("/forum/comment", createComment);

/**
 * @openapi
 * /forum/comment:
 *   post:
 *     tags: ['Forum']
 *     description: Добавление комментария
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
router.post("/user/create", createUser);

export default router;