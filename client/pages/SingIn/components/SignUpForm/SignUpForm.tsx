import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import {Button} from "client/components/Button";
import {makeInputValidationProps} from "client/hooks/useInput/useInput";
import useForm from "client/hooks/useForm";
import {user, UserCreateBody} from "client/api/user";
import {useResponseValidation} from "client/hooks/useServerValidation";
import Form from "client/components/Form";
import {FormState} from "client/components/Form/types";
import useRequest from "client/hooks/useRequest";
import getServerErrorMessage from "client/helpers/getServerErrorMessage";
import {Validations} from "client/hooks/useValidation";
import {InputResults, SuccessCallbackArg} from "client/hooks/useForm/useForm";
import {userCreateRules} from "client/validations/user";
import css from './style.module.pcss';

const SignUpForm: Props = () => {
    const [formState, setFormState] = useState<FormState>('normal');
    const [isLoading, createUser] = useRequest()

    useEffect(() => setFormState(isLoading ? 'loading' : formState), [isLoading]);

    const processResponse = (errors: ResponseErrorItem<keyof UserCreateBody>[] | undefined) => {
        errors?.forEach(({attribute, type}) => {
            if (attribute && form[attribute] && type) {
                form[attribute].setCustomError(getServerErrorMessage(type, attribute));
            }
        });
    }

    const processServerErrors = (
        data: SuccessCallbackArg<Record<keyof UserCreateBody, Validations>>,
        form: InputResults<Record<keyof UserCreateBody, Validations>>
    ) => {
        createUser(() => user.create(data).then((response) => {
            const success = useResponseValidation<keyof UserCreateBody>(response, processResponse);
            setFormState(success ? 'success' : 'normal');
        }));
    };

    const {form, submitCallback} = useForm<Record<keyof UserCreateBody, Validations>>(userCreateRules, processServerErrors);

    return <Form
        onSubmit={(e) => {
            e.preventDefault();
            submitCallback();
        }}
        successMessage="User successfully created!"
        state={formState}
    >
        <FormGroup errors={form.name.displayErrors}>
            <Input {...makeInputValidationProps(form.name)} placeholder={'name'}/>
        </FormGroup>
        <FormGroup errors={form.username.displayErrors}>
            <Input {...makeInputValidationProps(form.username)} placeholder={'login'}/>
        </FormGroup>
        <FormGroup errors={form.password.displayErrors}>
            <Input {...makeInputValidationProps(form.password)} type={'password'}
                   placeholder={'password'}/>
        </FormGroup>
        <div className={css.buttonWrapper}>
            <Button type={'submit'} style={'inversed'}>Sign up</Button>
        </div>
    </Form>
};

export default SignUpForm;
