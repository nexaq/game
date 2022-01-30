import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { ForumComment, ForumTopic } from '../models';
import User from "../models/user";
import isDocker from "../utils/isDocker";
import UserToken from "../models/userToken";

const sequelizeOptions: SequelizeOptions = {
    host: isDocker() ? 'postgres' : (process.env.POSTGRES_HOST ?? 'postgres'),
    port: 5432,
    username: process.env.POSTGRES_USER || 'super',
    password: process.env.POSTGRES_PASSWORD || '123456',
    database: process.env.POSTGRES_DATABASE || 'game',
    models: [ForumTopic, ForumComment, User, UserToken],
    dialect: 'postgres',
};

const sequelize = new Sequelize(sequelizeOptions);

export { sequelize };