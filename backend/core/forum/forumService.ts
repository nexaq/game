import arrayToTree from "array-to-tree";
import { Request } from "express";

import { NotFoundError, UnauthorizedError } from "../../errors/api";
import tokenService from "../user/tokenService";
import UserDto from "../user/userDto";
import UserModel from "../user/userModel";
import { ForumCommentModel, ForumTopicModel } from "./index";

class ForumService {
  async createTopic(request: Request) {
    const { refreshToken } = request.cookies;
    const userData = tokenService.validateRefreshToken(refreshToken);

    if (!userData) {
      throw new UnauthorizedError();
    }

    const user = await UserModel.findByPk(userData.id);

    if (!user) {
      throw new UnauthorizedError();
    }

    return ForumTopicModel.create({ ...request.body, userId: user.id });
  }

  async getTopic(id: number) {
    const userDtoAttributes = Object.getOwnPropertyNames(
      new UserDto(new UserModel())
    );

    const topic = await ForumTopicModel.findOne({
      include: [
        {
          model: UserModel,
          as: "user",
          attributes: userDtoAttributes,
        },
        {
          model: ForumCommentModel,
          as: "comments",
          include: [
            {
              model: UserModel,
              attributes: userDtoAttributes,
            },
          ],
        },
      ],
      where: {
        id,
      },
      order: [["comments", "id", "desc"]],
    });

    if (!topic) {
      throw new NotFoundError();
    }
    const topicJson = topic.toJSON();
    // generate tree
    topicJson.comments = arrayToTree(topicJson.comments, {
      parentProperty: "commentId",
      customID: "id",
      childrenProperty: "comments",
    });

    return topicJson;
  }
}

export default new ForumService();
