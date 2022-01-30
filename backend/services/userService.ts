import User, {UserCreationAttributes} from "../models/user";
import hashPass from "../utils/hashPass";
import {UnauthorizedError, ValidationError} from "../errors/api";
import UserDto from "../dto/userDto";
import tokenService from "./tokenService";
import TokenService from "./tokenService";

type LoginParams = Pick<UserCreationAttributes, 'password' | 'username'> & {
    [key: string]: any
}

class UserService {
    async login({username, password}: LoginParams) {
        const passwordHash = hashPass(password);
        const user = await User.findOne({ where: { username } })

        if (!user) {
            return Promise.reject(new ValidationError([
                {
                    attribute: 'username',
                    type: 'wrong',
                    message: 'Wrong username'
                }
            ]));
        }

        if (passwordHash !== user.password) {
            return Promise.reject(new ValidationError([
                {
                    attribute: 'password',
                    type: 'wrong',
                    message: 'Wrong password'
                }
            ]));
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens(userDto);
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken: string) {
        return await TokenService.removeToken(refreshToken);
    }


    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw new UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenDB = await tokenService.findToken(refreshToken);

        if (!userData || !tokenDB) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens(userDto);
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
}


export default new UserService();