import flow from "lodash.flow";
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from "webpack";

import {
  initClientConfig,
  loadAssets,
  loadScripts,
  loadStyles,
} from "../settings";

function getConfig(): webpack.Configuration {
  return flow([
    initClientConfig(),
    loadScripts({
      isSSR: false,
    }),
    loadStyles({ isSSR: false }),
    loadAssets(),
  ])({});
}

export default getConfig();
