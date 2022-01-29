import {Request, NextFunction, Response} from "express";
import processResponseErrors from "backend/helpers/processResponseErrors";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    const processedError = processResponseErrors(err);

    return res.status(processedError.status).json(processedError.getResponseData());
}