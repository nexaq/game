import isServer from "client/utils/serverSide/isServer";
import {
  BrowserHistory,
  createBrowserHistory,
  createMemoryHistory,
} from "history";

const history: BrowserHistory = isServer
  ? createMemoryHistory()
  : createBrowserHistory();

export default history;
