import {post} from "client/utils/api";
import {ApiPath} from "./consts";
import {ResponseCreationData} from "../hooks/useServerValidation/types";

export type UserCreateBody = {
    name: string,
    username: string,
    password: string,
}

export const user = {
    create: (data: UserCreateBody) => post<ResponseCreationData<keyof UserCreateBody>>(ApiPath.USER.CREATE, data),
}