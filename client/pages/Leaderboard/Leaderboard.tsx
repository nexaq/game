import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Users from "../../components/users";
import Container from "client/components/Container";

let Leaderboard: Props = () => {
    return (
        <>
            <Helmet>
                <title>LEADERBOARD</title>
            </Helmet>
            <Layout title="Leaderboard">
                <Container>
                    <Users />
                </Container>
            </Layout>
        </>
    );
};

export default Leaderboard;