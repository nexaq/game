import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import LinkButton, {Button} from "client/components/Button";
import {makeInputValidationProps} from "client/hooks/useInput/useInput";
import useForm from "client/hooks/useForm";
import {user, UserDTO} from "client/api/user";
import Form from "client/components/Form";
import {FormState} from "client/components/Form/types";
import useRequest from "client/hooks/useRequest";
import {Validations} from "client/hooks/useValidation";
import {FormResult, SuccessData} from "client/hooks/useForm/useForm";
import {userCreateRules} from "client/validations/user";
import css from './style.module.pcss';

const SignUpForm: Props = () => {
    const [state, setState] = useState<FormState>('normal');
    const [isLoading, createUser] = useRequest()

    useEffect(() => setState(isLoading ? 'loading' : state), [isLoading]);

    const {form, submitCallback} = useForm<Record<keyof UserDTO, Validations>>(userCreateRules, (
        data: SuccessData<UserDTO>,
        form: FormResult<UserDTO>,
        apply
    ) => {
        createUser(() => user.create(data).then((response) => {
            setState(apply(response) ? 'success' : 'normal');
        }));
    });

    return <Form
        onSubmit={(e) => {
            e.preventDefault();
            submitCallback();
        }}
        successMessage={<>
            User successfully created!
            <div style={{marginTop: '1rem'}}>
                <LinkButton url={'/sign-in'}>Sign in</LinkButton>
            </div>
        </>}
        state={state}
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
            <LinkButton url={'/sign-in'} style={'link'} className={css.leftButton}>Sign in</LinkButton>
        </div>
    </Form>
};

export default SignUpForm;
