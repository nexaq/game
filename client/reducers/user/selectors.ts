import {CommonStore} from "../../utils/infrastructure/store";

export const userSelector = (store: CommonStore) => store.login.user;