import { UserDTO } from "client/api/user";

export interface UserState {
  isAuth: boolean | null;
  user: UserDTO | null;
}

export enum UserActionType {
  LOGIN = "LOGIN",
  CHECK_AUTH = "CHECK_AUTH",
}

export interface CheckAuth {
  type: UserActionType.CHECK_AUTH;
  payload: UserState;
}

export interface LoginAction {
  type: UserActionType.LOGIN;
  payload: UserDTO;
}

export type UserAction = LoginAction | CheckAuth; // | Action1 | Action2 | ...
