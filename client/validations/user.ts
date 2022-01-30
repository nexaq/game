import {UserDTO} from "../api/user";
import {Validations} from "../hooks/useValidation";

type UserCreateRules = Record<keyof UserDTO, Validations>
type UserLoginRules = Record<keyof Pick<UserDTO, 'username' | 'password'>, Validations>


export const userCreateRules: UserCreateRules = {
    name: {notEmpty: true, minLength: 3, maxLength: 32},
    username: {notEmpty: true, minLength: 4, maxLength: 32},
    password: {notEmpty: true, minLength: 6, maxLength: 32},
};


export const userLoginRules: UserLoginRules = {
    username: {notEmpty: true, maxLength: 32},
    password: {notEmpty: true, maxLength: 32},
}