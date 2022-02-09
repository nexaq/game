import React from 'react';
import {Props} from "./types";
import UserItem from "./components/UserItem";
import Avatar from "../Avatar";
import Grid from "../Grid";

const Users: Props = ({
    items
}) => {
    return <Grid cols={1} rowGap={12}>
        {items.map((leader, index) => {
            return <UserItem key={leader.key} name={leader.name} extra={leader.extra} number={index+1} avatar={leader.avatar} />
        })}
    </Grid>;
};

export default Users;