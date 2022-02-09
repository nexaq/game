import UserDto from "../dto/userDto";
import {NotFoundError, UnauthorizedError} from "../errors/api";
import tokenService from "./tokenService";
import User from "../models/user";
import {ForumComment, ForumTopic} from "../models";
import {Request} from "express";
import arrayToTree from "array-to-tree";

    class ForumService {
    async createTopic(request: Request) {
        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }

        return await ForumTopic.create({...request.body, userId: user.id});
    }

    async getTopic(id: number) {
        const userDtoAttributes = Object.getOwnPropertyNames(new UserDto(new User()));

        const topic = await ForumTopic.findOne({
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: userDtoAttributes
                },
                {
                    model: ForumComment,
                    as: 'comments',
                    include:  [
                        {
                            model: User,
                            attributes: userDtoAttributes
                        },
                    ]
                },
            ],
            where: {
                id: id,
            },
            order: [['comments', 'id', 'desc']]
        });

        if (!topic) {
            throw new NotFoundError();
        }
        const topicJson = topic.toJSON();
        // generate tree
        topicJson.comments = arrayToTree(topicJson.comments, {
            parentProperty: 'commentId',
            customID: 'id',
            childrenProperty: 'comments',
        });

        return topicJson;
    }
}

export default new ForumService();