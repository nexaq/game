import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import Topic from "../../components/Forum/Topic";
import Comment from "../../components/Forum/Comment";
import Comments from "../../components/Forum/Comments";
import Spacing from "../../components/Spacing";
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