import { user } from "client/api/user";
import { Button } from "client/components/Button";
import EditableField from "client/components/EditableField";
import Form from "client/components/Form";
import { FormState } from "client/components/Form/types";
import FormGroup from "client/components/FormGroup";
import Input from "client/components/Input";
import Modal from "client/components/Modal";
import Spacing from "client/components/Spacing";
import useForm from "client/hooks/useForm";
import { makeInputValidationProps } from "client/hooks/useInput/useInput";
import useRequest from "client/hooks/useRequest";
import { userUpdatePasswordRules } from "client/validations/user";
import React, { useEffect, useState } from "react";

import { Props } from "./types";

const EditPassword: Props = () => {
  const [showLoading, updateUser] = useRequest();
  const [state, setState] = useState<FormState>("normal");
  useEffect(() => setState(showLoading ? "loading" : state), [showLoading]);
  const [showModal, setShowModal] = useState(false);

  const { form, submitCallback } = useForm(
    userUpdatePasswordRules,
    (data, form, apply) => {
      updateUser(() =>
        user.updatePassword(data).then((response) => {
          setState(apply(response) ? "success" : "normal");
        })
      );
    }
  );

  const resetModal = () => {
    setState("normal");
    form.password.setValue("");
    form.password.setDirty(false);
    form.newPassword.setValue("");
    form.newPassword.setDirty(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      resetModal();
    }
  };

  return (
    <div>
      <Modal
        handleClose={toggleModal}
        title="Update password"
        active={showModal}
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            submitCallback();
          }}
          state={state}
        >
          <FormGroup errors={form.password.displayErrors}>
            <Input
              {...makeInputValidationProps(form.password)}
              type="password"
              placeholder="old password"
            />
          </FormGroup>
          <FormGroup errors={form.newPassword.displayErrors}>
            <Input
              {...makeInputValidationProps(form.newPassword)}
              type="password"
              placeholder="new password"
            />
          </FormGroup>
          <Spacing size="sm" />
          <Button type="submit">Save</Button>
        </Form>
      </Modal>
      <EditableField
        displayValue="***"
        placeholder="password"
        onClick={toggleModal}
      />
    </div>
  );
};

export default EditPassword;
