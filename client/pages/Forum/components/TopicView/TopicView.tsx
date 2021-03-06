import { CommentDTO, TopicDTO } from "client/api/forum";
import Comments from "client/components/@forum/Comments";
import Topic from "client/components/@forum/Topic";
import LinkButton from "client/components/Button";
import Loading from "client/components/Loading";
import Spacing from "client/components/Spacing";
import avatarFileToSrc from "client/helpers/avatarFileToSrc";
import useRequest from "client/hooks/useRequest";
import { useTypedSelector } from "client/hooks/useTypedSelector";
import { fetchTopic } from "client/reducers/topic/actions";
import { topicSelector } from "client/reducers/topic/selectors";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { Props } from "./types";

const TopicView: Props = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showLoading, getTopics] = useRequest({
    delay: 100,
  });

  const topic = useTypedSelector(topicSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchTopic(Number(id), getTopics));
    }
  }, []);

  const renderCommentRecursive = (
    item: CommentDTO,
    topicId: number
  ): JSX.Element => {
    const { comment, user, id, comments, createdAt } = item;

    const createdAtFormatted = new Date(createdAt).toLocaleString();
    const { avatar, name } = user;

    return (
      <div key={id}>
        <Comment
          id={id}
          date={createdAtFormatted}
          comment={comment}
          author={name}
          topicId={topicId}
          avatar={avatarFileToSrc(avatar)}
        />
        {!!comments?.length && (
          <div
            style={{
              marginLeft: `${3}rem`,
            }}
          >
            {comments.map((item) => renderCommentRecursive(item, topicId))}
          </div>
        )}
      </div>
    );
  };

  const renderComments = (comments: CommentDTO[], topicId: number) => {
    return (
      <Comments>
        {comments.map((item) => renderCommentRecursive(item, topicId))}
      </Comments>
    );
  };

  const renderTopic = (topic: TopicDTO) => {
    const { title, user, description, comments, id, createdAt } = topic;
    const createdAtFormatted = new Date(createdAt).toLocaleString();
    const { name, avatar } = user ?? {};

    return (
      <>
        <div>
          <LinkButton url="/forum">Go back</LinkButton>
        </div>
        <Spacing size="md" />
        <Topic
          title={title}
          author={name}
          avatar={avatarFileToSrc(avatar)}
          date={createdAtFormatted}
        >
          {description}
        </Topic>
        <Spacing size="xs" />
        <CommentForm topicId={id} />
        <Spacing size="md" />
        {!!comments?.length && renderComments(comments, id)}
      </>
    );
  };

  return (
    <>
      {!showLoading && topic && renderTopic(topic)}
      {showLoading && <Loading />}
    </>
  );
};

export default memo(TopicView);
