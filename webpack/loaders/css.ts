// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { ENVS } from "../assets/env";

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    sourceMap: ENVS.__DEV__,
  },
};

const cssLoaderModule = {
  loader: "css-loader",
  options: {
    sourceMap: ENVS.__DEV__,
    modules: {
      localIdentName: ENVS.__DEV__
        ? "[name]__[local]--[hash:base64:5]"
        : "[hash:base64:8]",
    },
  },
};

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: ENVS.__DEV__,
  },
};

const typingsForModules = {
  loader: "typings-for-css-modules-loader",
  options: {
    modules: true,
    namedExport: true,
  },
};

export default {
  client: [
    {
      test: /\.pcss$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader, cssLoader, postcssLoader],
    },
    {
      test: /\.module\.pcss$/,
      include: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        postcssLoader,
        typingsForModules,
        cssLoaderModule,
      ],
    },
  ],

  ssr: [
    {
      test: /\.scss$/,
      loader: "null-loader",
    },
    {
      test: /\.css$/,
      loader: "null-loader",
    },
  ],
};
