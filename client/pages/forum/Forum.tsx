import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";

let Forum: Props = () => {
    return (
        <>
            <Helmet>
                <title>FORUM</title>
            </Helmet>
            <Layout memoizeChildrenBy={[]} title="Forum">
                <div>
                    xx
                </div>
            </Layout>
        </>
    );
};

export default Forum;