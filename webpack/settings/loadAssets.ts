/* eslint-disable import/no-extraneous-dependencies */
import webpack from "webpack";

import { file, svg, url } from "../loaders";

export default () => (webpackConfig: webpack.Configuration) => {
  webpackConfig?.module?.rules?.push(file.ssr, svg.ssr, url);

  // favicon сюды можно впихнуть

  return webpackConfig;
};
