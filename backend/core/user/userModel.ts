import Model from "backend/model/model";
import hashPass from "backend/utils/hashPass";
import { Optional } from "sequelize";
import {
  AllowNull,
  AutoIncrement,
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

export interface UserAttributes {
  id: number;
  name: string;
  username: string;
  avatar: string;
  password: string;
}

export type UpdateAttributes = Pick<UserAttributes, "password"> & {
  newPassword: string;
};

export type UserCreationAttributes = Optional<UserAttributes, "id">;

@Table({
  timestamps: false,
  tableName: "user",
})
export default class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare name: string;

  @AllowNull(false)
  @Unique(true)
  @Column(DataType.STRING)
  declare username: string;

  @Column(DataType.STRING)
  declare avatar: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare password: string;

  @BeforeUpdate
  @BeforeCreate
  static makePassword(user: UserModel) {
    // eslint-disable-next-line no-param-reassign
    user.password = hashPass(user.password);
  }
}
