import User from "../models/user";

export default class UserDto {
    username;
    id;
    name;
    avatar;

    constructor(user: User) {
        const {username, id, name, avatar} = user;
        this.username = username;
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
}