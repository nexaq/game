import server from "./app";
import { startApp } from "./utils/startApp";
import { startDb } from "./utils/startDb";

startApp({
  server,
  startDb,
}).catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
});
