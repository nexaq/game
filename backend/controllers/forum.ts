import {NextFunction, Request, Response} from "express";

import {ForumComment, ForumTopic} from "../models";

export async function createTopic(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        const topic = await ForumTopic.create({...request.body});
        response.status(200).json(topic);
    } catch (e) {
        next(e);
    }
}

export async function getTopics(
    request: Request,
    response: Response
): Promise<void> {
    try {
        const topics = await ForumTopic.findAll({
            include: [
                {
                    model: ForumComment,
                    include: [
                        {
                            model: ForumComment,
                        },
                    ],
                },
            ],
        });
        response.status(200).json(topics);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function createComment(
    request: Request,
    response: Response
): Promise<void> {
    try {
        const topic = await ForumComment.create({
            ...request.body,
            topicId: request.body.topic_id,
        });
        response.status(200).json(topic);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function getComments(
    request: Request,
    response: Response
): Promise<void> {
    try {
        const topics = await ForumComment.findAll({
            where: {
                topicId: request.query.id,
            },
            include: [
                {
                    model: ForumComment,
                    include: [
                        {
                            model: ForumComment,
                        },
                    ],
                },
            ],
        });
        response.status(200).json(topics);
    } catch (e) {
        response.status(500).json(e);
    }
}
