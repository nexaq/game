import { UserAction, UserActionType, UserState } from "./types";

const initialState: UserState = {
  isAuth: null,
  user: null,
};

export const userReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { ...state, user: { ...action.payload }, isAuth: true };
    case UserActionType.CHECK_AUTH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
