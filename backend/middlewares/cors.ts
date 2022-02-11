import cors from 'cors';


let origins = ["https://127.0.0.1", "127.0.0.1"];

if (process.env.MAIN_HOST) {
    let origin = process.env.MAIN_HOST;

    origins = [origin];
}

const corsOptions = {
    origin: origins,
    credentials: true,
};

export default () => cors(corsOptions);