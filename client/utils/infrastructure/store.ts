import {reducers} from 'client/reducers';
import configureStore from "../../store";
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const reduxStore = configureStore(reducers);

export type CommonStore = ReturnType<typeof reduxStore.getState>;

export type TypedThunkAction<T extends string> = ThunkAction<void, CommonStore, unknown, Action<T>>;

function getStore<T extends CommonStore>(): T {
    return reduxStore.getState() as T;
}

export {
    getStore,
    reduxStore,
};

export default {
    ...reduxStore,
};
