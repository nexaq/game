import mergeOptions from "merge-options";
import path from "path";
// eslint-disable-next-line import/no-extraneous-dependencies
import pkgDir from "pkg-dir";

const CONFIG_DIR =
  process.env.CFG_DIR || path.join(pkgDir.sync() || "", "configs");
const ENV = process.env.NODE_ENV;

let defaultConfig;
try {
  // eslint-disable-next-line global-require
  defaultConfig = require(path.join(CONFIG_DIR, "default"));
} catch (err) {
  if (err.code !== "MODULE_NOT_FOUND") {
    throw err;
  }

  // eslint-disable-next-line
    console.warn('[cfg] Warning: could not load default config', err);
}

let environmentConfig;
try {
  if (ENV) {
    // eslint-disable-next-line global-require
    environmentConfig = require(path.join(CONFIG_DIR, ENV));
  }
} catch (err) {
  if (err.code !== "MODULE_NOT_FOUND") {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.warn(`[cfg] Warning: could not load ${ENV} config`, err);
}

export default mergeOptions(
  { environment: ENV },
  defaultConfig,
  environmentConfig
);
