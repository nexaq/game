import React from 'react';
import {Props} from "./types";
import UserItem from "./components/user-item";
import Avatar from "../avatar";
import Grid from "../grid";

const Users: Props = ({
}) => {

    const leaders = [
        {
            avatar: <></>,
            name: 'Tonald J Drumb',
            extra: '10000 kills',
        },{
            avatar: <></>,
            name: 'Tonald J Drumb',
            extra: '10000 kills',
        },{
            avatar: <></>,
            name: 'Tonald J Drumb',
            extra: '10000 kills',
        },
    ];

    return <Grid cols={1} rowGap={12}>
        {leaders.map((leader, key) => {
            return <UserItem name={leader.name} extra={leader.extra} number={key+1} avatar={<Avatar />} />
        })}
    </Grid>;
};

export default Users;