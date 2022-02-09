import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import css from './style.module.pcss';

const Play: Props = () => {

    return (
        <>
            <Helmet>
                <title>PLAY</title>
            </Helmet>
            <Layout title="Play" mustBeAuthorized>
                <Container>
                    <div>
                        <canvas className={css.canvas} />
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Play;