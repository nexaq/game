import { user, UserDTO, UserUpdateAttributes } from "client/api/user";
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
import { Validations } from "client/hooks/useValidation";
import { createCheckAuthAction } from "client/reducers/user/actions";
import { userUpdateRules } from "client/validations/user";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { isSuccessFormResponse } from "../../../../utils/api/guards";
import { Props } from "./types";

const EditField: Props = ({ field, initialValues, placeholder }) => {
  const [showLoading, updateUser] = useRequest();

  const [state, setState] = useState<FormState>("normal");

  useEffect(() => setState(showLoading ? "loading" : state), [showLoading]);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { form, submitCallback } = useForm<
    Record<keyof UserUpdateAttributes, Validations>
  >(
    userUpdateRules,
    (data, form, apply) => {
      updateUser(() =>
        user.update(data).then((response) => {
          setState(apply(response) ? "success" : "normal");

          if (isSuccessFormResponse<UserDTO>(response)) {
            dispatch(createCheckAuthAction(response.data ?? null));
          }
        })
      );
    },
    initialValues
  );

  const resetModal = () => {
    setState("normal");
    form[field].setValue(initialValues[field]);
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
        title={`Edit field ${placeholder}`}
        active={showModal}
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            submitCallback();
          }}
          state={state}
        >
          {Object.entries(initialValues).map(([attribute, value]) => {
            return (
              <input
                type="hidden"
                key={attribute}
                name={attribute}
                value={value}
              />
            );
          })}
          <FormGroup errors={form[field].displayErrors}>
            <Input
              {...makeInputValidationProps(form[field])}
              placeholder={placeholder}
            />
          </FormGroup>
          <Spacing size="sm" />
          <Button type="submit">Save</Button>
        </Form>
      </Modal>
      <EditableField
        displayValue={initialValues[field]}
        placeholder={placeholder}
        onClick={toggleModal}
      />
    </div>
  );
};

export default EditField;
