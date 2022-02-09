import React, {useState} from 'react';
import {Props} from "./types";
import {default as CommentOriginal} from 'client/components/forum/Comment';
import {ReplyButton, ViewAnswersButton} from "client/components/forum/buttons";
import CommentForm from "../CommentForm";

const Comment: Props = ({author, comment, topicId, id, date, avatar}) => {

    const [showReplyForm, setReplyForm] = useState(false);

    const buttons = <>
        <ReplyButton onClick={() => {
            setReplyForm(!showReplyForm);
        }} />
    </>;
    return <div>
        <CommentOriginal date={date} author={author} comment={comment} buttons={buttons} avatar={avatar} />
        <div style={{
            marginLeft: '5.3rem',
        }}>
            {showReplyForm && <CommentForm topicId={topicId} commentId={id} />}
        </div>
    </div>
};


export default Comment;