import tokenService from "backend/core/user/tokenService";
import { NextFunction, Request, Response } from "express";

import { UnauthorizedError } from "../errors/api";

// eslint-disable-next-line consistent-return
export default function auth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return next(new UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return next(new UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(new UnauthorizedError());
    }

    request.user = userData;
    next();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
