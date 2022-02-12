import { GLOBAL_ROUTES } from "client/routes";
import {
  ErrorRequestHandler,
  RequestHandler,
  Router,
  static as staticRoute,
} from "express";
import cfg from "lib/cfg";
import { renderApp } from "ssr/controllers";
import { cookieParser, helmet } from "ssr/middlewares";

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
  helmet,
  cookieParser,
];

export const staticRoutes = (router: Router) => {
  router
    .use("/", staticRoute(cfg.static.staticDir))
    .use("/static", staticRoute(cfg.static.dir))
    .use("/fonts", staticRoute("dist/fonts"))
    .use("/favicons", staticRoute("dist/favicons"))
    .get(GLOBAL_ROUTES.NOT_FOUND, middlewares, renderApp);
};
