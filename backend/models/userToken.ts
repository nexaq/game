import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    PrimaryKey, Table
} from "sequelize-typescript";
import Model from "./model";
import User from "./user";
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
export default class UserToken extends Model<UserTokenAttributes, UserTokenCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    token!: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        field: 'user_id',
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}