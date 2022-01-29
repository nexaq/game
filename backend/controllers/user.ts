import {Request, Response} from "express";
import User, {UserCreationAttributes} from "../models/user";
import makeResponseValidationData from "../helpers/responseValidation";

export async function createUser(
    request: Request,
    response: Response
): Promise<void> {
    try {
        await User.create({...request.body});
        response.status(200).json({
            success: true,
        });
    } catch (e) {
        const validationResult = makeResponseValidationData<keyof UserCreationAttributes>(e);

        if (validationResult) {
            response.status(400).json(validationResult);
            return;
        }

        console.error(e);
        response.status(500).json({
            message: 'Server Error'
        });
    }
}