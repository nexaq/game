import {checkAuth as checkIfAuth} from "client/api/user";
import {AnyAction} from "redux";

export default async function isAuth<T extends AnyAction>() {
    try {
        const response = await checkIfAuth();

        if (response.status === 200 && response.data?.accessToken) {
            // update access token
            const {user, accessToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            return user ?? null;
        }
    } catch (e) {
        console.error(e);
    }

    return null;
}