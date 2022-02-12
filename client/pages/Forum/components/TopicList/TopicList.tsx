import React, {Fragment, memo, useEffect, useState} from 'react';
import {Props} from "./types";
import Topic from "client/components/@forum/Topic";
import Spacing from "client/components/Spacing";
import utils from 'styles/utils.module.pcss';
import useRequest from "client/hooks/useRequest";
import Heading from "client/components/@typography";
import {forumViewUrl} from "client/routes";
import {ViewAnswersButton} from "client/components/@forum/buttons";
import {Link} from "react-router-dom";
import CreateSection from "../CreateSection";
import {fetchTopics as fetchTopicsRedux} from "client/reducers/topics/actions";
import {useTypedSelector} from "client/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import useAfterEachLoading from "client/hooks/useAfterEachLoading";
import avatarFileToSrc from "client/helpers/avatarFileToSrc";
import {topicsSelector} from "client/reducers/topics/selectors";
import Loading from "client/components/Loading";

let Forum: Props = () => {
    const topics = useTypedSelector(topicsSelector);

    const [showLoading, fetchTopics, isLoading] = useRequest({delay: 100});

    const [isEmpty, setEmpty] = useState(false);

    useAfterEachLoading(isLoading, () => {
        setEmpty(!topics?.length);
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopicsRedux(fetchTopics));
    }, []);

    return (
        <>
            <CreateSection/>
            <div className={utils.miniContainer}>
                {!showLoading && topics?.map(({id, title, user, description}) => {
                    const viewUrl = forumViewUrl(id);
                    const button = <Link to={viewUrl}><ViewAnswersButton/></Link>;
                    const {avatar, name} = user;

                    return <Fragment key={id}>
                        <Topic
                            url={viewUrl}
                            author={name}
                            title={title}
                            buttons={button}
                            avatar={avatarFileToSrc(avatar)}
                        >{
                            description
                        }</Topic>
                        <Spacing size={'sm'}/>
                    </Fragment>
                })}
                {isEmpty && <Heading level={'h3'}>No topics at the moment.</Heading>}
                {showLoading && <Loading />}
            </div>
        </>
    );
};

export default memo(Forum);