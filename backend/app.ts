import express, {Express} from 'express';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from './router';
import cors from "./middlewares/cors";
import errorMiddleware from "backend/middlewares/error";
import fileUpload from 'express-fileupload';

const server: Express = express();

server
    .use(cors())
    .disable('x-powered-by') // прячем от хакеров :p
    .enable('trust proxy')
    .use(fileUpload({
        createParentPath: true
    }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use(router)
    .use(errorMiddleware);

export default server;
