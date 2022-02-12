import Container from "client/components/Container";
import Layout from "client/components/Layout";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

import Topics from "./components/TopicList";
import TopicView from "./components/TopicView";
import { Props } from "./types";

const Forum: Props = () => {
  const { id } = useParams();

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
