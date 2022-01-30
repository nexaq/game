import User from "../models/user";

export default class UserDto {
    username;
    id;
    name;

    constructor(user: User) {
        const {username, id, name} = user;
        this.username = username;
        this.id = id;
        this.name = name;
    }
}