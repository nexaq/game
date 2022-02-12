import { UserDTO } from "client/api/user";
import history from "client/components/CustomBrowserRouter/history";
import isAuth from "client/helpers/isAuth";
import { ROUTES } from "client/routes";
import { TypedThunkAction } from "client/utils/infrastructure/store";

import { CheckAuth, LoginAction, UserActionType } from "./types";

const createLoginAction = (payload: UserDTO): LoginAction => {
  return { type: UserActionType.LOGIN, payload };
};

export const createCheckAuthAction = (payload: UserDTO | null): CheckAuth => {
  return {
    type: UserActionType.CHECK_AUTH,
    payload: {
      user: payload,
      isAuth: !!payload, // boolean значит запрос уже был
    },
  };
};

export const login = (accessToken: string, user: UserDTO): LoginAction => {
  localStorage.setItem("accessToken", accessToken);
  setTimeout(() => history.push(ROUTES.PLAY.INDEX));
  return createLoginAction(user);
};

export const checkAuth =
  (redirect = false): TypedThunkAction<UserActionType.CHECK_AUTH> =>
  async (dispatch) => {
    isAuth().then((user) => {
      if (!user && redirect) {
        setTimeout(() => history.push(ROUTES.SIGN_IN.INDEX));
      }

      dispatch(createCheckAuthAction(user));
    });
  };
