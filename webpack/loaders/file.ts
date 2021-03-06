const cfg = require("../../lib/cfg").default;

const filenameRegexp = /^(?!.*\.inline).*\.(jpe?g|png|gif|eot|woff2?|ttf|wav)$/;

export default {
  client: {
    loader: "file-loader",
    test: filenameRegexp,
    options: {
      name: "[hash].[ext]",
      outputPath: "./client/",
      publicPath: cfg.static.baseUrl,
    },
  },

  ssr: {
    loader: "file-loader",
    test: filenameRegexp,
    options: {
      name: "[hash].[ext]",
      outputPath: "./client/",
      publicPath: cfg.static.baseUrl,
    },
  },
};
