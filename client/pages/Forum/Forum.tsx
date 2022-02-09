import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import Topics from "./components/TopicList";
import {useParams} from "react-router";
import TopicView from "./components/TopicView";

let Forum: Props = () => {
    const {id} = useParams();

    return (
        <>
            <Helmet>
                <title>FORUM</title>
            </Helmet>
            <Layout title="Forum">
                <Container>
                    {!id && <Topics />}
                    {id && <TopicView />}
                </Container>
            </Layout>
        </>
    );
};

export default Forum;