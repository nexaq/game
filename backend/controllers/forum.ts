import {NextFunction, Request, Response} from "express";

import {ForumComment, ForumTopic} from "backend/models";
import User from "backend/models/user";
import {UnauthorizedError} from "backend/errors/api";
import tokenService from "backend/services/tokenService";
import UserDto from "backend/dto/userDto";
import forumService from "backend/services/forumService";

export async function createTopic(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
       const topic = forumService.createTopic(request);

        response.status(200).json(topic);
    } catch (e) {
        next(e);
    }
}

export async function getTopic(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const {id} = request.params;
        const topicData = await forumService.getTopic(Number(id));

        return response.status(200).json(topicData);
    } catch (e) {
        next(e);
    }
}

export async function getTopics(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        const userDtoAttributes = Object.getOwnPropertyNames(new UserDto(new User()));

        const topics = await ForumTopic.findAll({
            include: [
                {
                    model: User,
                    attributes: userDtoAttributes
                },
            ],
            order: [
                ['id', 'DESC'],
            ]
        });
        response.status(200).json(topics);
    } catch (e) {
        next(e);
    }
}

export async function createComment(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const topic = await ForumComment.create({
            ...request.body,
            userId: userData.id,
        });
        response.status(200).json(topic);
    } catch (e) {
        next(e);
    }
}
