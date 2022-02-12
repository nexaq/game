import { StoreOptions } from "core";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  PreloadedState,
  ReducersMapObject,
} from "redux";
import thunk from "redux-thunk";

function configureStore<S>(
  reducers: ReducersMapObject<S, any>,
  preloadedState?: PreloadedState<S>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: StoreOptions
) {
  return createStore(
    combineReducers<S>(reducers),
    preloadedState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
