import { ForumCommentModel, ForumTopicModel } from "backend/core/forum";
import GameResultModel from "backend/core/game/gameResultModel";
import UserModel from "backend/core/user/userModel";
import UserTokenModel from "backend/core/user/userTokenModel";
import isDocker from "backend/utils/isDocker";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const sequelizeOptions: SequelizeOptions = {
  host: isDocker() ? "postgres" : process.env.POSTGRES_HOST ?? "postgres",
  port: 5432,
  username: process.env.POSTGRES_USER || "super",
  password: process.env.POSTGRES_PASSWORD || "123456",
  database: process.env.POSTGRES_DATABASE || "game",
  models: [
    ForumTopicModel,
    ForumCommentModel,
    UserModel,
    UserTokenModel,
    GameResultModel,
  ],
  dialect: "postgres",
};

const sequelize = new Sequelize(sequelizeOptions);

export { sequelize };
