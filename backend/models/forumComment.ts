import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

import ForumTopic from './forumTopic';
import User from "./user";

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: 'forum_comment',
})
export default class ForumComment extends Model<ForumComment> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;


  @AllowNull(false)
  @Column(DataType.STRING)
  comment!: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @ForeignKey(() => ForumTopic)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @BelongsTo(() => ForumTopic)
  topic!: ForumTopic;

  @ForeignKey(() => ForumComment)
  @Column({
    type: DataType.INTEGER,
    field: 'comment_id',
  })
  commentId!: number;

  @HasMany(() => ForumComment)
  comments!: ForumComment[];
}
