import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Users from "client/components/Users";
import Container from "client/components/Container";
import {useDispatch} from "react-redux";
import {fetchLeaderboard, leadersSelector} from "client/reducers/leaderboard/actions";
import {useTypedSelector} from "client/hooks/useTypedSelector";
import useRequest from "client/hooks/useRequest";
import Heading from "client/components/typography";
import useAfterEachLoading from "client/hooks/useAfterEachLoading";

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
                    {showLoading && <Heading level={'h3'}>Loading...</Heading>}
                    {leaders && <Users items={leaders?.map((leader) => {
                            return {
                                key: leader.id,
                                name: leader.user?.name,
                                avatar: <></>,
                                extra: `${leader.score} kills`,
                            }
                        })} />}

                </Container>
            </Layout>
        </>
    );
};

export default Leaderboard;