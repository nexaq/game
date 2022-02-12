import errorMiddleware from "backend/middlewares/error";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import fileUpload from "express-fileupload";

import cors from "./middlewares/cors";
import router from "./router";

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
