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
import {ForumComment} from "./index";
import User from "./user";

export interface ForumTopicAttributes {
  id: number
  title: string
  description: string
  userId: number
  comments: ForumComment[];
}

export interface ForumTopicCreationAttributes extends Optional<ForumTopicAttributes, 'id'> {}

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: 'forum_topic',
})
export default class ForumTopic extends Model<ForumTopicAttributes, ForumTopicCreationAttributes> implements ForumTopicAttributes {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;

  @HasMany(() => ForumComment)
  comments!: ForumComment[];
}
