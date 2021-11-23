import {ENVS, GLOBAL_ARGS} from '../assets/env';
import webpack from "webpack";
import {join} from "path";
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';


import {
    CLIENT_DIR,
    DIST_DIR,
    ROOT_DIR,
} from '../assets/dir';
const {__DEV__, __PROD__} = ENVS;

const vendorsManifest = require(
    join(DIST_DIR, 'webpack', 'vendors-manifest.json').replace('dist/dist', 'dist'),
);

export default () => (webpackConfig: webpack.Configuration) => {
    const config = {
        name: 'Client',
        target: 'web',
        devtool: __DEV__ ? 'eval-source-map' : 'source-map',
        mode: __DEV__ ? 'development' : 'production',
        entry: {
            desktop:
                [
                    __DEV__ && `webpack-hot-middleware/client?path=/__webpack_hmr`,
                    join(CLIENT_DIR, 'bundles', 'desktop', 'index').replace('dist/', '')
                ].filter(Boolean) as string[],
        },
        output: {
            filename: `[name].bundle.js`,
            // создает либу, можно запускать через Client.default(...)
            library: 'Client',
            libraryTarget: 'var',
            path: join(DIST_DIR, 'client'),
            publicPath: __DEV__
                ? '/static/'
                : `https://storage.yandexcloud.net/path/to/S3/client/`,
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json'], // порядок важен
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
            // крутая штука, укорит сборку вендора значительно
            new webpack.DllReferencePlugin({
                context: ROOT_DIR,
                manifest: vendorsManifest,
            }),
            new webpack.ProgressPlugin(),
            // передаем переменные в бандл
            new webpack.DefinePlugin(GLOBAL_ARGS),
            // билдим ts в отдельном потоке
            new ForkTsCheckerPlugin(),
        ],
    }

    if (__DEV__) {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: 'whm', // webpack hot middleware
                },
            }),
        );
    }

    if (__PROD__) {
        config.plugins.push(
            new CompressionWebpackPlugin({minRatio: 1}) as webpack.WebpackPluginFunction, // почему-то ts ругается
            new DuplicatePackageCheckerPlugin()  as webpack.WebpackPluginFunction,
        )
    }

    return Object.assign(webpackConfig, config);
}