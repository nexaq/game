import Heading from "client/components/@typography";
import Avatar from "client/components/Avatar";
import Container from "client/components/Container";
import Layout from "client/components/Layout";
import Loading from "client/components/Loading";
import Users from "client/components/Users";
import avatarFileToSrc from "client/helpers/avatarFileToSrc";
import useAfterEachLoading from "client/hooks/useAfterEachLoading";
import useRequest from "client/hooks/useRequest";
import { useTypedSelector } from "client/hooks/useTypedSelector";
import { fetchLeaderboard } from "client/reducers/leaderboard/actions";
import { leadersSelector } from "client/reducers/leaderboard/selectors";
import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { Props } from "./types";

const Leaderboard: Props = () => {
  const leaders = useTypedSelector(leadersSelector);

  const [showLoading, fetchLeaders, isLoading] = useRequest();
  const [isEmpty, setEmpty] = useState(false);

  useAfterEachLoading(isLoading, () => {
    setEmpty(!leaders?.length);
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeaderboard(fetchLeaders));
  }, []);

  return (
    <>
      <Helmet>
        <title>LEADERBOARD</title>
      </Helmet>
      <Layout title="Leaderboard">
        <Container>
          {isEmpty && <Heading level="h3">No leaders at the moment.</Heading>}
          {showLoading && <Loading />}
          {!showLoading && leaders && (
            <Users
              items={leaders?.map((leader) => {
                return {
                  key: leader.id,
                  name: leader.user?.name,
                  avatar: (
                    <Avatar src={avatarFileToSrc(leader?.user?.avatar)} />
                  ),
                  extra: `${leader.score} kills`,
                };
              })}
            />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default memo(Leaderboard);
