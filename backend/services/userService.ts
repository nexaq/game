import User, {UserCreationAttributes} from "../models/user";
import hashPass from "../utils/hashPass";
import {UnauthorizedError, ValidationError} from "../errors/api";
import UserDto from "../dto/userDto";
import tokenService from "./tokenService";
import TokenService from "./tokenService";
import {Request} from "express";
import {sha256} from "js-sha256";

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

    async updateUser(
        request: Request
    ) {
        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }

        const result = await user.update({...request.body});

        if (!result) {
            throw new ErrorEvent('no user was updated');
        }

        return result;
    }

    async updateUserPassword(
        request: Request
    ) {
        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }

        const {password, newPassword} = request.body;

        if (user.password !== hashPass(password)) {
            throw new ValidationError([
                {
                    attribute: 'password',
                    type: 'wrong',
                    message: 'Old password is not valid'
                }
            ]);
        }

        const hashedNewPass = hashPass(newPassword);
        const result = await User.update({
            password: hashedNewPass
        }, {
            where: {
                id: user.id
            }
        });
        if (!result) {
            throw new ErrorEvent('no user was updated');
        }
    }

    async updateAvatar(request: Request) {
        const avatar = request.files?.avatar;

        if (!avatar || Array.isArray(avatar)) {
            throw new ValidationError([
                {
                    message: 'No file provided',
                    type: 'no_file',
                    attribute: 'avatar'
                }
            ])
        }

        if (avatar.mimetype !== 'image/jpg' && avatar.mimetype !== 'image/jpeg') {
            throw new ValidationError([
                {
                    message: 'Only jpg allowed',
                    type: 'file',
                    attribute: 'avatar'
                }
            ])
        }

        const filename = `${sha256(`${process.hrtime()}some salt here!`)}.jpg`;
        await avatar.mv('./backend/uploads/avatar/' + filename);

        const {refreshToken} = request.cookies;
        const userData = tokenService.validateRefreshToken(refreshToken);

        if (!userData) {
            throw new UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        if (!user) {
            throw new UnauthorizedError();
        }

        const result = await user.update({
            avatar: filename
        });

        if (!result) {
            throw new Error('error');
        }

        return result;
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