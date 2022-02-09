import UserDto from "../dto/userDto";
import {UnauthorizedError} from "../errors/api";
import tokenService from "./tokenService";
import User from "../models/user";
import {Request} from "express";
import GameResult from "../models/gameResult";

class GameService {
    async createResult(request: Request) {
        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }
        return await GameResult.create({...request.body, userId: user.id});
    }

    async getLeaders() {
        const userDtoAttributes = Object.getOwnPropertyNames(new UserDto(new User()));

        return await GameResult.findAll({
            include: [
                {
                    model: User,
                    attributes: userDtoAttributes,
                },
            ],
            order: [
                ['score', 'DESC'],
            ],
            limit: 10,
        });
    }

}

export default new GameService();