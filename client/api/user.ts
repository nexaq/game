import { get, post} from "client/utils/api";
import {ApiPath} from "./consts";
import {ResponseValidationData} from "../utils/api";

export type UserDTO = {
    name: string,
    username: string,
    password: string,
}

export type UserCreateValidationAttributes = UserDTO;
export type UserCreateResponseData = ResponseValidationData<keyof UserCreateValidationAttributes> & Partial<SuccessResponse>;
const create = <T = UserDTO>(data: T) => post<UserCreateResponseData>(ApiPath.USER.CREATE, data);

export type TokenSuccessData = {
    accessToken?: string,
    user?: UserDTO
};

export type UserLoginBody = Pick<UserDTO, 'username' | 'password'>;
export type UserLoginValidationAttributes = UserLoginBody;
export type UserLoginResponseData = ResponseValidationData<keyof UserLoginValidationAttributes> & TokenSuccessData;
const login = <T = UserLoginBody>(data: UserLoginBody) => post<UserLoginResponseData>(ApiPath.USER.LOGIN, data);

export const checkAuth = () => get<TokenSuccessData & 'unauthorized'>(ApiPath.USER.REFRESH_TOKEN, {
    refreshTokenOnFail: false
});

export const user = {
    create,
    login,
}