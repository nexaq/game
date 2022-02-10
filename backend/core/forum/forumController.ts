import {NextFunction, Request, Response} from "express";

import {ForumCommentModel, ForumTopicModel} from "backend/core/forum";
import UserModel from "backend/core/user/userModel";
import {UnauthorizedError} from "backend/errors/api";
import tokenService from "backend/core/user/tokenService";
import UserDto from "backend/core/user/userDto";
import forumService from "backend/core/forum/forumService";

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
        const userDtoAttributes = Object.getOwnPropertyNames(new UserDto(new UserModel()));

        const topics = await ForumTopicModel.findAll({
            include: [
                {
                    model: UserModel,
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

        const topic = await ForumCommentModel.create({
            ...request.body,
            userId: userData.id,
        });
        response.status(200).json(topic);
    } catch (e) {
        next(e);
    }
}
