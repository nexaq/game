import { RequestHandler } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from "webpack";
import webpackConfig from "webpack/config/client.config";
// eslint-disable-next-line import/no-extraneous-dependencies
import devMiddleware from "webpack-dev-middleware";
// eslint-disable-next-line import/no-extraneous-dependencies
import hotMiddleware from "webpack-hot-middleware";

import render from "./render";

function getWebpackMiddlewares(
  config: webpack.Configuration
): RequestHandler[] {
  // достаем компайлер
  const compiler = webpack.webpack({ ...config, mode: "development" }) as never;

  return [
    devMiddleware(compiler, {
      publicPath: config?.output?.publicPath as string,
    }),
    hotMiddleware(compiler, {
      log: false,
      path: `/__webpack_hmr`,
      heartbeat: 10 * 1000,
    }),
  ];
}

export default [...getWebpackMiddlewares(webpackConfig), render];
