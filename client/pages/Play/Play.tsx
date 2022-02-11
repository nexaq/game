import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";

import {LoadingLoadable} from "client/components/Game";
import Loadable from "react-loadable";

const LoadableGame = Loadable({
    loader: () => import('client/components/Game'),
    loading: LoadingLoadable,
});

const Play: Props = () => {
    return (
        <>
            <Helmet>
                <title>PLAY2</title>
            </Helmet>

            <Layout title="Play" mustBeAuthorized>
                <Container>
                    <LoadableGame />
                </Container>
            </Layout>
        </>
    );
};

export default Play;