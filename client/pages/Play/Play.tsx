import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";
import Container from "client/components/container";
import css from './style.module.pcss';


let Play: Props = () => {
    return (
        <>
            <Helmet>
                <title>PLAY</title>
            </Helmet>
            <Layout title="Play">
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