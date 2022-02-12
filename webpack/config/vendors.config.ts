import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import {join} from "path";
import {ENVS} from '../assets/env';


const {__DEV__} = ENVS;

import {VENDORS} from '../assets/config';
import {ROOT_DIR_FROM_WEBPACK} from "../assets/dir";


const DIST_DIR = join(ROOT_DIR_FROM_WEBPACK, 'dist');

const config: webpack.Configuration = {
    target: 'web',
    devtool: 'source-map',
    mode: __DEV__ ? 'development' : 'production',
    entry: {
        vendors: VENDORS,
    },
    output: {
        library: '[name]_[hash]',
        filename: '[name]_[hash].js',
        path: join(DIST_DIR, 'client', '_'),
    },
    plugins: [
        // Аху*енная вещь для моментального билда вендора
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: join(DIST_DIR, 'webpack', 'vendors-manifest.json'),
        }),
        new MiniCssExtractPlugin({filename: '[name]_[hash].css'}),
        // Для gzip компресии статических файлов
        !__DEV__ && new CompressionWebpackPlugin({minRatio: 1}),
    ].filter(Boolean) as webpack.WebpackPluginInstance[],
    stats: {
        children: false,
        warnings: false, // иногда лучше включать
    },
};

export default config;
