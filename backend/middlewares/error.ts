import processResponseErrors from "backend/helpers/processResponseErrors";
import { NextFunction, Request, Response } from "express";

export default function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const processedError = processResponseErrors(err);

  return res
    .status(processedError.status)
    .json(processedError.getResponseData());
}
