import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {css} from '../loaders';
import webpack from "webpack";

interface Options {
    isSSR: boolean;
}

export default (_options: Options) => (webpackConfig: webpack.Configuration) => {
    webpackConfig.plugins?.push(
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    );

    webpackConfig.module?.rules?.push(...css.client);

    return webpackConfig;
};
