import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'user_theme',
})
export default class UserTheme extends Model<UserTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme!: string;

  @Unique(true)
  @Column(DataType.STRING)
  user!: string;
}
