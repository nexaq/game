/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { css } from "../loaders";

interface Options {
  isSSR: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_options: Options) => (webpackConfig: webpack.Configuration) => {
  webpackConfig.plugins?.push(
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    })
  );

  webpackConfig.module?.rules?.push(...css.client);

  return webpackConfig;
};
