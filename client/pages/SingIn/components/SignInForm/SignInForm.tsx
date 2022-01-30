import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import LinkButton, {Button} from "client/components/Button";
import {makeInputValidationProps} from "client/hooks/useInput/useInput";
import useForm from "client/hooks/useForm";
import {user, UserLoginBody} from "client/api/user";
import Form from "client/components/Form";
import {FormState} from "client/components/Form/types";
import useRequest from "client/hooks/useRequest";
import {Validations} from "client/hooks/useValidation";
import {FormResult, SuccessData} from "client/hooks/useForm/useForm";
import {userLoginRules} from "client/validations/user";
import css from './style.module.pcss';
import {useDispatch} from "react-redux";
import {login as userLogin} from "client/reducers/user/actions";

const SignInForm: Props = () => {
    const [state, setState] = useState<FormState>('normal');
    const [isLoading, login] = useRequest()
    const dispatch = useDispatch();

    useEffect(() => setState(isLoading ? 'loading' : state), [isLoading]);

    const {form, submitCallback} = useForm<Record<keyof UserLoginBody, Validations>>(userLoginRules, (
        data: SuccessData<UserLoginBody>,
        form: FormResult<UserLoginBody>,
        apply
    ) => {
        login(() => user.login(data).then((response) => {
            const success = apply(response);
            if (success && response?.data?.accessToken && response.data.user) {
                dispatch(userLogin(response.data.accessToken, response.data.user));
            }
            setState(success ? 'success' : 'normal');
        }));
    });

    return <Form
        onSubmit={(e) => {
            e.preventDefault();
            submitCallback();
        }}
        successMessage="User successfully created!"
        state={state}
    >
        <FormGroup errors={form.username.displayErrors}>
            <Input {...makeInputValidationProps(form.username)} placeholder={'login'}/>
        </FormGroup>
        <FormGroup errors={form.password.displayErrors}>
            <Input {...makeInputValidationProps(form.password)} type={'password'}
                   placeholder={'password'}/>
        </FormGroup>
        <div className={css.buttonWrapper}>
            <Button type={'submit'} style={'inversed'}>Sign in</Button>
            <LinkButton url={'/sign-up'} style={'link'} className={css.leftButton}>Sign up</LinkButton>
        </div>
    </Form>
};

export default SignInForm;
