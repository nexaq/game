import React, {useEffect, useRef} from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import Game from "../../components/Game";


const Play: Props = () => {
    return (
        <>
            <Helmet>
                <title>PLAY</title>
            </Helmet>
            <Layout title="Play">
                <Container>
                    <Game />
                </Container>
            </Layout>
        </>
    );
};

export default Play;