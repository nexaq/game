import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import css from './style.module.pcss';
import SignUpForm from "./components/SignUpForm";

let SignUp: Props = () => {
    return (
        <>
            <Helmet>
                <title>SIGN UP</title>
            </Helmet>
            <Layout>
                <Container>
                    <div className={css.login}>
                        <div className={css.inner}>
                            <h1 className={css.title}>
                                WORLD <br/>OF STARSHIP
                            </h1>
                            <div style={{
                                maxWidth: '400px'
                            }}>
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default SignUp;