import {NextFunction, Request, Response} from "express";
import User from "../models/user";
import userService from "../services/userService";

export async function createUser(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        await User.create({...request.body});
        response.status(200).json({
            success: true,
        });
    } catch (e) {
        next(e);
    }
}

export async function loginUser(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        const {refreshToken, accessToken, user} = await userService.login({...request.body});
        response.cookie('refreshToken', refreshToken, {
            maxAge: 30*24*60*60*1000,
            httpOnly: true
        });
        response.json({
            accessToken,
            user
        });
    } catch (e) {
        next(e);
    }
}

export async function logoutUser(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const {refreshToken} = request.cookies;
        await userService.logout(refreshToken);
        response.clearCookie('refreshToken');
        return response.json({
            success: true,
        });
    } catch (e) {
        next(e);
    }
}

export async function refreshUser(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const {refreshToken} = request.cookies;
        const {refreshToken: newRefreshToken, accessToken, user} = await userService.refresh(refreshToken);
        response.cookie('refreshToken', newRefreshToken, {
            maxAge: 15*24*60*60*1000,
            httpOnly: true
        });
        return response.json({
            user,
            accessToken
        });
    } catch (e) {
        next(e);
    }
}