import {get, post, put} from "client/utils/api/api";
import {ApiPath} from "./consts";
import {FormResponseData, ResponseValidationData} from "../utils/api/types";

export type UserDTO = {
    name: string,
    username: string,
    avatar: string,
}

type Password = { password: string };

export type UserCreateValidationAttributes = Omit<UserDTO, 'avatar'> & Password;
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

export type UserUpdateAttributes = Pick<UserDTO, 'username' | 'name'>;
export type UserUpdateResponseData = FormResponseData<UserDTO, UpdatePasswordAttributes>;
const update = (data: UserUpdateAttributes) => put<UserUpdateResponseData>(ApiPath.USER.CREATE, data);

export type UpdatePasswordAttributes = Password & {
    newPassword: string
}
export type UpdatePasswordResponseData = FormResponseData<UpdatePasswordAttributes>;
const updatePassword  = <T = UpdatePasswordAttributes>(data: T) => put<UpdatePasswordResponseData>(ApiPath.USER.UPDATE_PASSWORD, data);

export type UserUpdateAvatarAttributes = Pick<UserDTO, 'avatar'>;
export type UserUpdateAvatarResponseData = FormResponseData<UserUpdateAvatarAttributes, UserDTO>;
const updateAvatar = <T = UserDTO>(data: T) => put<UserUpdateAvatarResponseData>(ApiPath.USER.UPDATE_AVATAR, data);

export const user = {
    create,
    login,
    update,
    updatePassword,
    updateAvatar
}


