import { reducers } from "client/reducers";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import configureStore from "../../store";

delete window.__PRELOADED_STATE__;

const reduxStore = configureStore(reducers);

export type CommonStore = ReturnType<typeof reduxStore.getState>;

export type TypedThunkAction<T extends string> = ThunkAction<
  void,
  CommonStore,
  unknown,
  Action<T>
>;

function getStore<T extends CommonStore>(): T {
  return reduxStore.getState() as T;
}

export { getStore, reduxStore };

export default {
  ...reduxStore,
};
