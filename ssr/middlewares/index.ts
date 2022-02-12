import cookieParserMiddleware from "cookie-parser";
import { RequestHandler } from "express";
import rateLimitMiddleware from "express-rate-limit";
import helmetMiddleware from "helmet";
import cfg from "lib/cfg";

import renderMiddleware from "./render";

// куки что бы были в `req.cookies`
const cookieParser: RequestHandler = cookieParserMiddleware();

// Защита от DOS :p
const rateLimit: RequestHandler = rateLimitMiddleware({
  windowMs: 15 * 60 * 10000,
  max: 20000,
});

const helmet = helmetMiddleware(cfg.helmet);

const render: RequestHandler | RequestHandler[] = renderMiddleware;

export { cookieParser, helmet, rateLimit, render };
