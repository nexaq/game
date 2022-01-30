import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import css from './style.module.pcss';
import SignInForm from "./components/SignInForm";

let SignIn: Props = () => {
    return (
        <>
            <Helmet>
                <title>SIGN IN</title>
            </Helmet>
            <Layout >
                <Container>
                    <div className={css.login}>
                        <div className={css.inner}>
                            <h1 className={css.title}>
                                WORLD <br/>OF STARSHIP
                            </h1>
                            <div style={{
                                maxWidth: '400px'
                            }}>
                                <SignInForm />
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default SignIn;