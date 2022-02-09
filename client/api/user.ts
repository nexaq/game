import {get, post, put} from "client/utils/api";
import {ApiPath} from "./consts";
import {ResponseValidationData} from "../utils/api";

export type UserDTO = {
    name: string,
    username: string,
}

type Password = { password: string };

export type UserCreateValidationAttributes = UserDTO & Password;
export type UserCreateResponseData = ResponseValidationData<keyof UserCreateValidationAttributes> & Partial<SuccessResponse>;
const create = <T = UserDTO>(data: T) => post<UserCreateResponseData>(ApiPath.USER.CREATE, data);

export type TokenSuccessData = {
    accessToken?: string,
    user?: UserDTO
};

export type UserLoginBody = Pick<UserDTO, 'username'> & Password;
export type UserLoginValidationAttributes = UserLoginBody;
export type UserLoginResponseData = ResponseValidationData<keyof UserLoginValidationAttributes> & TokenSuccessData;
const login = <T = UserLoginBody>(data: UserLoginBody) => post<UserLoginResponseData>(ApiPath.USER.LOGIN, data);

export const checkAuth = () => get<TokenSuccessData & 'unauthorized'>(ApiPath.USER.REFRESH_TOKEN, {
    refreshTokenOnFail: false
});


export type UserUpdateAttributes = UserDTO;
export type UserUpdateResponseData = ResponseValidationData<keyof UserUpdateAttributes> & Partial<SuccessResponse>;
const update = <T = UserDTO>(data: T) => put<UserUpdateResponseData>(ApiPath.USER.CREATE, data);


export type UpdatePasswordAttributes = Password & {
    newPassword: string
}
export type UpdatePasswordResponseData = ResponseValidationData<keyof UpdatePasswordAttributes> & Partial<SuccessResponse>;
const updatePassword  = <T = UpdatePasswordAttributes>(data: T) => put<UpdatePasswordResponseData>(ApiPath.USER.UPDATE_PASSWORD, data);

export type UserUpdateAvatarAttributes = UserDTO;
export type UserUpdateAvatarResponseData = ResponseValidationData<keyof UserUpdateAvatarAttributes> & Partial<SuccessResponse>;
const updateAvatar = <T = UserDTO>(data: T) => put<UserUpdateAvatarResponseData>(ApiPath.USER.UPDATE_AVATAR, data);

export const user = {
    create,
    login,
    update,
    updatePassword,
    updateAvatar
}


