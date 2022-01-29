import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

import ForumTopic from './forumTopic';

@Table({
  timestamps: false,
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
  @Column(DataType.STRING)
  user!: string;

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
