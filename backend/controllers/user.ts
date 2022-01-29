import {NextFunction, Request, Response} from "express";
import User from "../models/user";

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