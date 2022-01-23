import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";
import Container from "client/components/container";
import Topic from "../../components/forum/Topic";
import Comment from "../../components/forum/Comment";
import Comments from "../../components/forum/Comments";
import Spacing from "../../components/spacing";
import utils from 'styles/utils.module.pcss';

let Forum: Props = () => {
    return (
        <>
            <Helmet>
                <title>FORUM</title>
            </Helmet>
            <Layout memoizeChildrenBy={[]} title="Forum">
                <Container>
                    <div className={utils.miniContainer}>
                        <Topic/>
                        <Spacing size={'lg'}/>
                        <Comments>
                            <Comment/>
                            <Comment/>
                        </Comments>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Forum;