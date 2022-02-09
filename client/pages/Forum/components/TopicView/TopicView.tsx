import React, {memo, useEffect} from 'react';
import {Props} from "./types";
import Topic from "client/components/forum/Topic";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {fetchTopic, topicSelector} from "client/reducers/topic/actions";
import useRequest from "client/hooks/useRequest";
import Heading from "client/components/typography";
import {useTypedSelector} from "client/hooks/useTypedSelector";
import {CommentDTO, TopicDTO} from "client/api/forum";
import Comments from "client/components/forum/Comments";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Spacing from "client/components/Spacing";
import LinkButton from "client/components/Button";

let TopicView: Props = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const [showLoading, getTopics] = useRequest({
        delay: 100
    });

    const topic = useTypedSelector(topicSelector);

    useEffect(() => {
        if (id) {
            dispatch(fetchTopic(Number(id), getTopics));
        }
    }, []);

    const renderCommentRecursive = (item: CommentDTO,  topicId: number): JSX.Element => {
        const {comment, user, id, comments, createdAt} = item;

        const createdAtFormatted = new Date(createdAt).toLocaleString();


        return <div key={id}>
            <Comment id={id} date={createdAtFormatted} comment={comment} author={user?.name} topicId={topicId} />
            {!!comments?.length && (
                <div style={{
                    marginLeft: `${3}rem`
                }}>
                    {comments.map((item) => renderCommentRecursive(item, topicId))}
                </div>
            )}
        </div>;
    }

    const renderComments = (comments: CommentDTO[], topicId: number) => {
        return (
            <Comments>
                {comments.map(item => renderCommentRecursive(item, topicId))}
            </Comments>
        );
    }

    const renderTopic = (topic: TopicDTO) => {
        const {title, user, description, comments, id, createdAt} = topic;
        const createdAtFormatted = new Date(createdAt).toLocaleString();

        return <>
            <div>
                <LinkButton url={'/forum'}>Go back</LinkButton>
            </div>
            <Spacing size={'md'} />
            <Topic
                title={title}
                author={user?.name}
                date={createdAtFormatted}
            >
                {description}
            </Topic>
            <Spacing size={'xs'}/>
            {<CommentForm topicId={id}/>}
            <Spacing size={'md'}/>
            {!!comments?.length && renderComments(comments, id)}
        </>
    }

    return (
        <>
            {!showLoading && topic && renderTopic(topic)}
            {showLoading && <Heading level={'h3'}>Loading...</Heading>}
        </>
    );
};

export default memo(TopicView);