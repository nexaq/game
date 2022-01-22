import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";

let Leaderboard: Props = () => {
    return (
        <>
            <Helmet>
                <title>LEADERBOARD</title>
            </Helmet>
            <Layout>

            </Layout>
        </>
    );
};

export default Leaderboard;