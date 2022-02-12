import {ENVS} from '../assets/env';
import webpack from "webpack";
import {join} from "path";
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';

import {
    CLIENT_DIR,
    DIST_DIR,
} from '../assets/dir';
import RemovePlugin from "remove-files-webpack-plugin";
const {__DEV__} = ENVS;

export default () => (webpackConfig: webpack.Configuration) => {
    const config = {
        name: 'Client',
        target: 'node',
        mode: __DEV__ ? 'development' : 'production',
        devtool: 'source-map',
        entry: {
            'postcss-functions': join(CLIENT_DIR, 'styles', 'functions').replace('dist/', '')
        },
        output: {
            filename: `[name].js`,
            library: '[name]',
            libraryTarget: 'commonjs',
            path: join(DIST_DIR, 'extras'),
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json', '.pcss'], // порядок важен + расширение теперь можно не указывать
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },
        module: {
            rules: [],
        },
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
            new RemovePlugin({
                after: {
                    log: false,
                    logWarning: true,
                    logError: true,
                    include: [
                        join(DIST_DIR, 'extras', 'postcss-functions.bundle.css'),
                        join(DIST_DIR, 'extras', 'postcss-functions.bundle.css.map')
                    ]
                }
            })
        ]
    }

    return Object.assign(webpackConfig, config);
}