import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column, CreatedAt,
  DataType, ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import {Optional} from "sequelize";
import ForumCommentModel from "./forumCommentModel";
import UserModel from "../user/userModel";

export interface ForumTopicAttributes {
  id: number
  title: string
  description: string
  userId: number
  comments: ForumCommentModel[];
}

export interface ForumTopicCreationAttributes extends Optional<ForumTopicAttributes, 'id'> {}

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: 'forum_topic',
})
export default class ForumTopicModel extends Model<ForumTopicAttributes, ForumTopicCreationAttributes> implements ForumTopicAttributes {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @BelongsTo(() => UserModel)
  user!: UserModel;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;

  @HasMany(() => ForumCommentModel)
  comments!: ForumCommentModel[];
}
