import webpack from 'webpack';

import {ENVS} from '../assets/env';
const {__DEV__} = ENVS;

export default {
    client: {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        __DEV__ && '@babel/preset-env',
                        __DEV__ && "@babel/preset-typescript",
                        // Enable development transform of React with new automatic runtime
                        __DEV__ && ['@babel/preset-react', { development: true, runtime: 'automatic' }],
                    ].filter(Boolean),
                    plugins: [
                        __DEV__ && 'react-refresh/babel',
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "regenerator": true
                            }
                        ]
                    ].filter(Boolean),
                },
            } as webpack.RuleSetRule,
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
