import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

import ForumTopicModel from './forumTopicModel';
import UserModel from "../user/userModel";

@Table({
  timestamps: true,
  updatedAt: false,
  tableName: 'forum_comment',
})
export default class ForumCommentModel extends Model<ForumCommentModel> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;


  @AllowNull(false)
  @Column(DataType.STRING)
  comment!: string;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @BelongsTo(() => UserModel)
  user!: UserModel;

  @AllowNull(false)
  @ForeignKey(() => ForumTopicModel)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @BelongsTo(() => ForumTopicModel)
  topic!: ForumTopicModel;

  @ForeignKey(() => ForumCommentModel)
  @Column({
    type: DataType.INTEGER,
    field: 'comment_id',
  })
  commentId!: number;

  @HasMany(() => ForumCommentModel)
  comments!: ForumCommentModel[];
}
