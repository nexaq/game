import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";
import Users from "../../components/users";
import Container from "client/components/container";

let Leaderboard: Props = () => {
    return (
        <>
            <Helmet>
                <title>LEADERBOARD</title>
            </Helmet>
            <Layout memoizeChildrenBy={[]} title="Leaderboard">
                <Container>
                    <Users />
                </Container>
            </Layout>
        </>
    );
};

export default Leaderboard;