import {NextFunction, Request, Response} from "express";
import GameService from "../services/gameService";

export async function getLeaderboard(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const results = await GameService.getTop10();
        response.status(200).json(results);
    } catch (e) {
        next(e);
    }
}

export async function createResult(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        const result = await GameService.createResult(request);
        response.status(200).json(result);
    } catch (e) {
        next(e);
    }
}