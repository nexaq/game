import { topic } from "client/api/forum";
import { Button } from "client/components/Button";
import Form from "client/components/Form";
import { FormState } from "client/components/Form/types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import Spacing from "client/components/Spacing";
import useForm from "client/hooks/useForm";
import { makeInputValidationProps } from "client/hooks/useInput/useInput";
import useRequest from "client/hooks/useRequest";
import { fetchTopics } from "client/reducers/topics/actions";
import { topicCreateRules } from "client/validations/forum";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Props } from "./types";

const CreateForm: Props = () => {
  const [state, setState] = useState<FormState>("normal");
  const dispatch = useDispatch();

  const [showLoading, createTopic] = useRequest();
  useEffect(() => setState(showLoading ? "loading" : state), [showLoading]);

  const { form, submitCallback } = useForm(
    topicCreateRules,
    (data, form, apply) => {
      createTopic(() =>
        topic.create(data).then((response) => {
          const success = apply(response);
          setState(success ? "success" : "normal");
          if (success) {
            dispatch(fetchTopics());
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
      state={state}
    >
      <FormGroup errors={form.title.displayErrors}>
        <Input {...makeInputValidationProps(form.title)} placeholder="title" />
      </FormGroup>
      <FormGroup errors={form.description.displayErrors}>
        <Input
          {...makeInputValidationProps(form.description)}
          placeholder="description"
        />
      </FormGroup>
      <Spacing size="sm" />
      <div>
        {/* eslint-disable-next-line react/style-prop-object */}
        <Button type="submit" style="inversed">
          Create
        </Button>
      </div>
    </Form>
  );
};

export default CreateForm;
