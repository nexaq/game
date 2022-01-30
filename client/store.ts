import {StoreOptions} from 'core';
import {applyMiddleware, combineReducers, createStore, ReducersMapObject,} from 'redux';
import thunk from "redux-thunk";

function configureStore<S>(reducers: ReducersMapObject<S, any>, options?: StoreOptions) {
    return createStore(
        combineReducers<S>(reducers),
        applyMiddleware(
            thunk
        ),
    );
}

export default configureStore;
