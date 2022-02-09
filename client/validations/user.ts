import {
    UpdatePasswordAttributes,
    UserCreateValidationAttributes,
    UserLoginBody,
    UserUpdateAttributes
} from "client/api/user";
import {Validations} from "client/hooks/useValidation";

type UserCreateRules = Record<keyof UserCreateValidationAttributes, Validations>
type UserUpdateRules = Record<keyof UserUpdateAttributes, Validations>
type UserLoginRules = Record<keyof UserLoginBody, Validations>
type UserUpdatePasswordRules = Record<keyof UpdatePasswordAttributes, Validations>

export const userCreateRules: UserCreateRules = {
    name: {notEmpty: true, minLength: 3, maxLength: 32},
    username: {notEmpty: true, minLength: 4, maxLength: 32},
    password: {notEmpty: true, minLength: 6, maxLength: 32},
};

export const userUpdateRules: UserUpdateRules = {
    name: {notEmpty: true, minLength: 3, maxLength: 32},
    username: {notEmpty: true, minLength: 4, maxLength: 32},
};

export const userUpdatePasswordRules: UserUpdatePasswordRules = {
    password: {notEmpty: true, minLength: 6, maxLength: 32},
    newPassword: {notEmpty: true, minLength: 6, maxLength: 32},
};

export const userLoginRules: UserLoginRules = {
    username: {notEmpty: true, maxLength: 32},
    password: {notEmpty: true, maxLength: 32},
}
