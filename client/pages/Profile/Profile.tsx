import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import Grid from "client/components/Grid";
import Avatar from "client/components/Avatar";
import Button from "client/components/Button/Button";
import Spacing from "client/components/Spacing";
import utils from 'styles/utils.module.pcss';
import css from './style.module.pcss';
import ProfileForm from "./components/UserForm";
import AvatarUploadButton from "./components/AvatarUploadButton/AvatarUplaodButton";

let Profile: Props = () => {

    return (
        <>
            <Helmet>
                <title>PROFILE</title>
            </Helmet>
            <Layout title="Profile" mustBeAuthorized>
                <Container>
                    <div className={css.profile}>
                        <div
                            className={`${utils.dFlex} ${utils.directionColumn} ${utils.flexAlignCenter} ${css.editProfile}`}>
                            <Avatar size={'xl'}/>
                            <Spacing size={'sm'}/>
                            <AvatarUploadButton />
                        </div>
                        <div className={css.info}>
                            <ProfileForm/>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Profile;