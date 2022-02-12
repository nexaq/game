import { Optional } from "sequelize";
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import UserModel from "../user/userModel";

export interface GameResultAttributes {
  id: number;
  score: number;
  userId: number;
}

export type GameResultCreationAttributes = Optional<GameResultAttributes, "id">;

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: "game_result",
})
export default class GameResultModel
  extends Model<GameResultAttributes, GameResultCreationAttributes>
  implements GameResultAttributes
{
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  score!: number;

  @BelongsTo(() => UserModel)
  user!: UserModel;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    field: "user_id",
  })
  userId!: number;
}
