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
import EditableField from "client/components/EditableField";

let Profile: Props = () => {
    return (
        <>
            <Helmet>
                <title>FORUM</title>
            </Helmet>
            <Layout title="Profile">
                <Container>
                    <div className={css.profile}>
                        <div className={`${utils.dFlex} ${utils.directionColumn} ${utils.flexAlignCenter} ${css.editProfile}`}>
                            <Avatar size={'xl'} />
                            <Spacing size={'sm'} />
                            <Button>upload</Button>
                        </div>
                        <div className={css.info}>
                            <Grid cols={1} rowGap={12}>
                                <EditableField />
                                {/*<EditableField />*/}
                                {/*<EditableField />*/}
                            </Grid>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Profile;