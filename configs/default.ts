import { AppConfig } from "cfg";
import { join } from "path";

const config: AppConfig = {
  static: {
    dir: join(__dirname, "..", "client"),
    staticDir: join(__dirname, "..", "..", "static"),
  },

  helmet: {
    contentSecurityPolicy: false,
  },

  render: {
    isHot: false,
  },
};

module.exports = config;
