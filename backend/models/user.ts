import {Optional} from 'sequelize';
import {
    AllowNull,
    AutoIncrement, BeforeCreate, BeforeUpdate,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Unique
} from 'sequelize-typescript';
import hashPass from "../utils/hashPass";
import Model from './model';

export interface UserAttributes {
    id: number
    name: string
    username: string
    password: string
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
    timestamps: false,
    tableName: 'user',
})
export default class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    declare id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare name: string;

    @AllowNull(false)
    @Unique(true)
    @Column(DataType.STRING)
    declare username: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare password: string;

    @BeforeUpdate
    @BeforeCreate
    static makePassword(user: User) {
        user.password = hashPass(user.password);
    }
}
