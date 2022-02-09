import React, {useEffect, useState} from 'react';
import useForm from "client/hooks/useForm";
import {Button} from "client/components/Button";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import {makeInputValidationProps} from "client/hooks/useInput/useInput";
import Form from "client/components/Form";
import useRequest from "client/hooks/useRequest";
import {FormState} from "client/components/Form/types";
import {topic} from "client/api/forum";
import {topicCreateRules} from "client/validations/forum";
import Spacing from "client/components/Spacing";
import {Props} from "./types";
import {useDispatch} from "react-redux";
import {fetchTopics} from "client/reducers/topics/actions";

const CreateForm: Props = () => {
    const [state, setState] = useState<FormState>('normal');
    const dispatch = useDispatch();

    const [showLoading, createTopic] = useRequest()
    useEffect(() => setState(showLoading ? 'loading' : state), [showLoading]);

    const { form, submitCallback } = useForm(topicCreateRules, (data, form, apply) => {
        createTopic(() => topic.create(data).then(response => {
            const success = apply(response);
            setState(success ? 'success' : 'normal');
            if (success) {
                dispatch(fetchTopics());
            }
        }))
    });

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                submitCallback();
            }}
            state={state}
        >
            <FormGroup errors={form.title.displayErrors}>
                <Input {...makeInputValidationProps(form.title)} placeholder={'title'}/>
            </FormGroup>
            <FormGroup errors={form.description.displayErrors}>
                <Input {...makeInputValidationProps(form.description)} placeholder={'description'}/>
            </FormGroup>
            <Spacing size={'sm'} />
            <div>
                <Button type={'submit'} style={'inversed'}>Create</Button>
            </div>
        </Form>
    );
};

export default CreateForm;