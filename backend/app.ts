import express, {Express} from 'express';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from './router';
import cors from "./middlewares/cors";

const server: Express = express();

server
    .use(cors())
    .disable('x-powered-by') // прячем от хакеров :p
    .enable('trust proxy')
    .use(bodyParser.json())
    .use(cookieParser())
    .use(router);


export default server;
