import {checkAuth as checkIfAuth, UserDTO} from "client/api/user";
import {CheckAuth, LoginAction, UserActionType} from "./types";
import history from "client/components/CustomBrowserRouter/history";
import {ROUTES} from "client/routes";
import {TypedThunkAction} from "../../utils/infrastructure/store";

const createLoginAction = (payload: UserDTO): LoginAction => {
    return { type: UserActionType.LOGIN, payload }
}

const createCheckAuthAction = (payload: UserDTO | null): CheckAuth => {
    return { type: UserActionType.CHECK_AUTH, payload }
}

export const login = (accessToken: string, user: UserDTO): LoginAction => {
    localStorage.setItem('accessToken', accessToken);
    setTimeout(() => history.push(ROUTES.PLAY.INDEX));
    return createLoginAction(user);
}

export const checkAuth = (): TypedThunkAction<UserActionType.CHECK_AUTH> => async (dispatch) => {
    checkIfAuth().then(response => {
        if (response.status === 401) {
            dispatch(createCheckAuthAction(null));
            setTimeout(() => history.push(ROUTES.SIGN_IN.INDEX));
        } else if (response.status === 200 && response.data?.accessToken) {
            // refresh token
            const {user, accessToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            dispatch(createCheckAuthAction(user ?? null));
        }
    }).catch((e) => {
        alert('Error occurred try later!');
        console.error(e);
    });
}

