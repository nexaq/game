import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import css from './style.module.pcss';
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import {Button} from "client/components/Button";

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
                                <FormGroup>
                                    <Input value={''} />
                                </FormGroup>
                                <FormGroup>
                                    <Input value={''} />
                                </FormGroup>
                                <div className={css.buttonWrapper}>
                                    <Button type={'submit'} style={'inversed'}>Sign in</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default SignIn;