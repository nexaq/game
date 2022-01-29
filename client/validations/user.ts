import {UserCreateBody} from "../api/user";
import {Validations} from "../hooks/useValidation";

type UserCreateRules = Record<keyof UserCreateBody, Validations>
export const userCreateRules: UserCreateRules = {
    name: {notEmpty: true, minLength: 3, maxLength: 32},
    username: {notEmpty: true, minLength: 4, maxLength: 32},
    password: {notEmpty: true, minLength: 6, maxLength: 32},
};