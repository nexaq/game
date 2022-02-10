import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey, Length,
    PrimaryKey, Table
} from "sequelize-typescript";
import Model from "../../model/model";
import UserModel from "./userModel";
import {Optional} from "sequelize";

export interface UserTokenAttributes {
    id: number
    token: string
    userId: number
}
export interface UserTokenCreationAttributes extends Optional<UserTokenAttributes, 'id'> {}

@Table({
    timestamps: false,
    tableName: 'user_token',
})
export default class UserTokenModel extends Model<UserTokenAttributes, UserTokenCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Length({max: 2000})
    @Column(DataType.TEXT)
    token!: string;

    @AllowNull(false)
    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        field: 'user_id',
    })
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;
}