import cors from 'cors';


let origins = ["https://127.0.0.1", "127.0.0.1"];

if (process.env.HOST_SSR) {
    let origin = process.env.HOST_SSR;

    if (process.env.PORT_SSR) {
        origin = `${origin}:${process.env.PORT_SSR}`;
    }

    origins = [origin];
}

const corsOptions = {
    origin: origins,
    credentials: true,
};

export default () => cors(corsOptions);