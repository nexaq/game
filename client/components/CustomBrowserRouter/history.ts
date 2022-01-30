import {BrowserHistory, createBrowserHistory, createMemoryHistory} from 'history';
import isServer from "../../utils/serverSide/isServer";
let history: BrowserHistory;

history = isServer ? createMemoryHistory() : createBrowserHistory();

export default history;