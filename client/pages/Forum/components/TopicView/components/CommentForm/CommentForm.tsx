import { comments } from "client/api/forum";
import CommentFormOriginal from "client/components/@forum/CommentForm";
import Card from "client/components/Card";
import Form from "client/components/Form";
import Link from "client/components/Link";
import useForm from "client/hooks/useForm";
import useIsAuth from "client/hooks/useIsAuth";
import useRequest from "client/hooks/useRequest";
import { fetchTopic } from "client/reducers/topic/actions";
import { ROUTES } from "client/routes";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Props } from "./types";

const CommentForm: Props = ({ topicId, commentId }) => {
  const [, createComment] = useRequest();

  const isAuth = useIsAuth();

  const [showForm, setShowForm] = useState(true);

  const dispatch = useDispatch();

  const { form, submitCallback } = useForm(
    {
      comment: { notEmpty: true },
    },
    (data, form, apply) => {
      if (!isAuth) {
        setShowForm(false);
        return;
      }
      createComment(() =>
        comments.create({ ...data, topicId, commentId }).then((response) => {
          const success = apply(response);
          if (success) {
            form.comment.setValue("");
            form.comment.setDirty(false);
            // update comments etc...
            dispatch(fetchTopic(topicId));
          } else {
            form.comment.setCustomError("x");
          }
        })
      );
    }
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submitCallback();
      }}
    >
      {showForm && (
        <CommentFormOriginal
          onChange={form.comment.onChange}
          value={form.comment.value}
          errors={form.comment.displayErrors}
        />
      )}

      {!showForm && (
        <Card>
          <div
            style={{
              padding: "1rem",
              fontWeight: 500,
            }}
          >
            You need to <Link to={ROUTES.SIGN_IN.INDEX}>log in</Link> first..
          </div>
        </Card>
      )}
    </Form>
  );
};

export default CommentForm;
