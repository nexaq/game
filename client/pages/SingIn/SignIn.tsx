import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";
import Container from "client/components/container";
import css from './style.module.pcss';


let SignIn: Props = () => {
    return (
        <>
            <Helmet>
                <title>SIGN IN</title>
            </Helmet>
            <Layout>
                <Container>
                </Container>
            </Layout>
        </>
    );
};

export default SignIn;