import store from "../utils/infrastructure/store";

export default function isAuth() {
    return !!store.getState().login.user
}