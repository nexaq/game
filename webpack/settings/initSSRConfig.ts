import merge from 'lodash.merge';
import {join, resolve} from 'path';
import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import {ROOT_DIR_FROM_WEBPACK} from '../assets/dir';
import {ENVS, GLOBAL_ARGS} from '../assets/env';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';

const {DADATA_TOKEN} = process.env;
const {__DEV__} = ENVS;

export default ({entry}: {entry: any}) => (webpackConfig: webpack.Configuration) => {
    Object.assign(webpackConfig, {
        name: `ssr_bundles`,
        target: 'node',
        devtool: 'source-map',
        entry: entry.app,
        node: {__dirname: false},
        mode: __DEV__ ? 'development' : 'production',

        // аху*нная вещь
        externals: [webpackNodeExternals({
            allowlist: [
                /\.(?!(?:jsx?|json)$).{1,5}$/i,
            ],
        })],

        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json', '.pcss'],
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },

        output: {
            filename: `ssr.bundles.js`,
            libraryTarget: 'commonjs2',
            path: join(ROOT_DIR_FROM_WEBPACK, 'dist'),
            publicPath: '/static/'
        },

        module: {rules: []},

        stats: {
            all: undefined,
            builtAt: !__DEV__,
            chunks: !__DEV__,
            assets: !__DEV__,
            errors: true,
            warnings: true,
            outputPath: true,
            timings: true,
        },
        performance: {
            hints: false,
        },

        plugins: [
            new webpack.DefinePlugin(merge(
                GLOBAL_ARGS,
                {
                    'process.env': {
                        DADATA_TOKEN: JSON.stringify(DADATA_TOKEN),
                        APP_SIDE: 'server',
                    },
                },
            )),
            new webpack.ProvidePlugin({
                window: [resolve(join(__dirname, '../mock/window.mock')), 'default'],
                localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
                document: 'global/document',
            }),
        ],
    });

    return webpackConfig;
};
