import { Request } from "express";

import { UnauthorizedError } from "../../errors/api";
import tokenService from "../user/tokenService";
import UserDto from "../user/userDto";
import UserModel from "../user/userModel";
import GameResultModel from "./gameResultModel";

class GameService {
  async createResult(request: Request) {
    const { refreshToken } = request.cookies;
    const userData = tokenService.validateRefreshToken(refreshToken);

    const { score } = request.body;

    if (!userData) {
      throw new UnauthorizedError();
    }

    const user = await UserModel.findByPk(userData.id);

    if (!user) {
      throw new UnauthorizedError();
    }
    return GameResultModel.create({
      ...request.body,
      userId: user.id,
      score,
    });
  }

  async getLeaders() {
    const userDtoAttributes = Object.getOwnPropertyNames(
      new UserDto(new UserModel())
    );

    return GameResultModel.findAll({
      include: [
        {
          model: UserModel,
          attributes: userDtoAttributes,
        },
      ],
      order: [["score", "DESC"]],
      limit: 10,
    });
  }
}

export default new GameService();
