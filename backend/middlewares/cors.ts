import cors from "cors";

let origins = ["https://127.0.0.1", "127.0.0.1"];

const hostName = process.env.MAIN_HOSTNAME;
const protocol = process.env.__DEV__ ? "http" : "https";
const port = process.env.__DEV__ ? process.env.MAIN_PORT : "443";

if (hostName) {
  const origin = `${protocol}://${hostName}:${port}`;

  origins = [origin];
}

const corsOptions = {
  origin: origins,
  credentials: true,
};

export default () => cors(corsOptions);
