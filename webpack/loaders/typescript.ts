import webpack from 'webpack';

import {ENVS} from '../assets/env';

export default {
    client: {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            (ENVS.__DEV__ && ({
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            })) as webpack.RuleSetRule,
            {
                // делигируем это для fork-ts-checker
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ].filter(Boolean),
    },

    ssr: {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            }
        ]
    },
};
