import { Express } from "express";

interface Options {
  server: Express;
  startDb: () => Promise<void>;
}

const { PORT_BACKEND: PORT = 4000 } = process.env;

export async function startApp({ server, startDb }: Options) {
  await startDb();

  server.listen(PORT, () => {
    // eslint-disable-next-line
        console.log(`App on http://localhost:${PORT}`);
  });
}
