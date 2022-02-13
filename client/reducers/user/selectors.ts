import { CommonStore } from "client/utils/infrastructure/store";

export const userSelector = (store: CommonStore) => store.login.user;

export const authSelector = (store: CommonStore) => store.login.isAuth;
