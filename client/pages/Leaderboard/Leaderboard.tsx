import React, {memo, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Users from "client/components/Users";
import Container from "client/components/Container";
import {useDispatch} from "react-redux";
import {fetchLeaderboard} from "client/reducers/leaderboard/actions";
import {useTypedSelector} from "client/hooks/useTypedSelector";
import useRequest from "client/hooks/useRequest";
import Heading from "client/components/@typography";
import useAfterEachLoading from "client/hooks/useAfterEachLoading";
import Avatar from "client/components/Avatar";
import avatarFileToSrc from "client/helpers/avatarFileToSrc";
import {leadersSelector} from "client/reducers/leaderboard/selectors";
import Loading from "client/components/Loading";

let Leaderboard: Props = () => {
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
                    {isEmpty && <Heading level={'h3'}>No leaders at the moment.</Heading>}
                    {showLoading && <Loading />}
                    {!showLoading && leaders && <Users items={leaders?.map((leader) => {
                            return {
                                key: leader.id,
                                name: leader.user?.name,
                                avatar: <Avatar src={avatarFileToSrc(leader?.user?.avatar)} />,
                                extra: `${leader.score} kills`,
                            }
                        })} />}

                </Container>
            </Layout>
        </>
    );
};

export default memo(Leaderboard);