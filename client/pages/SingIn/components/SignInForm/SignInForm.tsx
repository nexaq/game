import { user } from "client/api/user";
import LinkButton, { Button } from "client/components/Button";
import Form from "client/components/Form";
import { FormState } from "client/components/Form/types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import useForm from "client/hooks/useForm";
import { makeInputValidationProps } from "client/hooks/useInput/useInput";
import useRequest from "client/hooks/useRequest";
import { login as userLogin } from "client/reducers/user/actions";
import { ROUTES } from "client/routes";
import { userLoginRules } from "client/validations/user";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import css from "./style.module.pcss";
import { Props } from "./types";

const SignInForm: Props = () => {
  const [state, setState] = useState<FormState>("normal");
  const [showLoading, login] = useRequest();
  const dispatch = useDispatch();

  useEffect(() => setState(showLoading ? "loading" : state), [showLoading]);

  const { form, submitCallback } = useForm(
    userLoginRules,
    (data, form, apply) => {
      login(() =>
        user.login(data).then((response) => {
          const success = apply(response);
          if (success && response?.data?.accessToken && response.data.user) {
            dispatch(userLogin(response.data.accessToken, response.data.user));
          }
          setState(success ? "success" : "normal");
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
      successMessage="User successfully created!"
      state={state}
    >
      <FormGroup errors={form.username.displayErrors}>
        <Input
          {...makeInputValidationProps(form.username)}
          placeholder="login"
        />
      </FormGroup>
      <FormGroup errors={form.password.displayErrors}>
        <Input
          {...makeInputValidationProps(form.password)}
          type="password"
          placeholder="password"
        />
      </FormGroup>
      <div className={css.buttonWrapper}>
        <Button type="submit" style="inversed">
          Sign in
        </Button>
        <LinkButton
          url={ROUTES.SIGN_UP.INDEX}
          style="link"
          className={css.leftButton}
        >
          Sign up
        </LinkButton>
      </div>
    </Form>
  );
};

export default SignInForm;
