import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import {UserUpdateAttributes, UserUpdateResponseData} from "client/api/user";
import Grid from "client/components/Grid";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import EditField from "../EditField";
import EditPassword from "../EditPassword";
import {userSelector} from "../../../../reducers/user/selectors";


const ProfileForm: Props = () => {
    const userFromRedux = useTypedSelector(userSelector);

    // во избежания ошибок
    const initialValues: UserUpdateAttributes = {
        name: userFromRedux ? userFromRedux.name : '',
        username: userFromRedux ? userFromRedux.username : ''
    };


    const fields = <Grid cols={1} rowGap={12}>
        <EditField initialValues={initialValues} field={'name'} placeholder={'name'} />
        <EditField initialValues={initialValues} field={'username'} placeholder={'username'} />
        <EditPassword />
    </Grid>;

    return <>
        {fields}
    </>

};

export default ProfileForm;
