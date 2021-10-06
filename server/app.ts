import express, {Express} from 'express';

import {queryParser} from 'server/controllers';
import {render} from 'server/middlewares';
import router from 'server/router';

const server: Express = express();

server
    .disable('x-powered-by') // прячем от хакеров :p
    .enable('trust proxy')
    .set('query parser', queryParser)
    .use(render)
    .use(router);

export default server;
