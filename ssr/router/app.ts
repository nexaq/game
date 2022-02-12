import { ROUTES } from "client/routes";
import { ErrorRequestHandler, RequestHandler, Router } from "express";
import { renderApp } from "ssr/controllers";
import { cookieParser, helmet } from "ssr/middlewares";

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
  helmet,
  cookieParser,
];

const allRoutes = (function flatRoutes(routesMap: object): string[] {
  return Object.values(routesMap).reduce<string[]>(
    (routes, path) =>
      routes.concat(typeof path === "object" ? flatRoutes(path) : path),
    []
  );
})(ROUTES);

export function appRoutes(router: Router) {
  router.get(allRoutes, middlewares, renderApp);
}
