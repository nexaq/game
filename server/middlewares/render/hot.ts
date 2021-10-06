import {RequestHandler} from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';


import webpackConfig from 'webpack/config/client.config';

import render from './render';

function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
    const compiler = webpack.webpack({...config, mode: 'development'}) as any;

    return [
        devMiddleware(compiler, {
            publicPath: config.output!.publicPath! as string,
        }),
        hotMiddleware(compiler, {path: `/__webpack_hmr_`}),
    ];
}

export default [
    ...getWebpackMiddlewares(webpackConfig),
    render,
];
