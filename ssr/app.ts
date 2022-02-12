import express, { Express } from "express";
import { queryParser } from "ssr/controllers";
import { render } from "ssr/middlewares";
import router from "ssr/router";

const server: Express = express();

server
  .disable("x-powered-by") // прячем от хакеров :p
  .enable("trust proxy")
  .set("query parser", queryParser)
  .use(render)
  .use(router);

export default server;
