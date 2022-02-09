import React, {useState} from 'react';
import {Props} from "./types";
import {default as CommentFormOriginal} from 'client/components/forum/CommentForm';
import Form from "client/components/Form";
import useForm from "client/hooks/useForm";
import useRequest from "client/hooks/useRequest";
import {comments} from "client/api/forum";
import useIsAuth from "client/hooks/useIsAuth";
import Link from "client/components/Link";
import {ROUTES} from "client/routes";
import Card from "client/components/Card";
import {fetchTopic} from "client/reducers/topic/actions";
import {useDispatch} from "react-redux";

const CommentForm: Props = ({topicId, commentId}) => {

    const [showLoading, createComment] = useRequest();

    const isAuth = useIsAuth();

    const [showForm, setShowForm] = useState(true);

    const dispatch = useDispatch();

    const {form, submitCallback} = useForm({
            comment: {notEmpty: true}
        },
        (data, form, apply) => {
            if (!isAuth) {
                setShowForm(false);
                return;
            }
            createComment(() => comments.create({...data, topicId, commentId}).then((response) => {
                const success = apply(response);
                if (success) {
                    form.comment.setValue('');
                    form.comment.setDirty(false);
                    // update comments etc...
                    dispatch(fetchTopic(topicId));
                } else {
                    form.comment.setCustomError('x');
                }
            }));
        });

    return (<Form
        onSubmit={(e) => {
            e.preventDefault()
            submitCallback();
        }}
    >
        {showForm && <CommentFormOriginal
            onChange={form.comment.onChange}
            value={form.comment.value}
            errors={form.comment.displayErrors}
        />}

        {!showForm && <>
            <Card>
                <div style={{
                    padding: '1rem',
                    fontWeight: 500
                }}>
                    You need to <Link to={ROUTES.SIGN_IN.INDEX}>log in</Link> first..
                </div>
            </Card>
        </>}
    </Form>)
};

export default CommentForm;