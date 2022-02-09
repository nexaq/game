import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column,
  DataType, ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import {Optional} from "sequelize";
import User from "./user";

export interface GameResultAttributes {
  id: number
  score: number
  userId: number
}

export interface GameResultCreationAttributes extends Optional<GameResultAttributes, 'id'> {}

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: 'game_result',
})
export default class GameResult extends Model<GameResultAttributes, GameResultCreationAttributes> implements GameResultAttributes {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  score!: number;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;
}
