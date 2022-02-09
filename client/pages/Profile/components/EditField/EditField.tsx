import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import {user, UserDTO, UserUpdateAttributes} from "client/api/user";
import EditableField from "client/components/EditableField";
import Input from "client/components/Input";
import Modal from "client/components/Modal";
import useForm from "client/hooks/useForm";
import {Validations} from "client/hooks/useValidation";
import {userUpdateRules} from "client/validations/user";
import useRequest from "client/hooks/useRequest";
import {FormState} from "client/components/Form/types";
import {makeInputValidationProps} from "client/hooks/useInput/useInput";
import {Button} from "client/components/Button";
import Spacing from "client/components/Spacing";
import Form from "client/components/Form";
import {useDispatch} from "react-redux";
import {createCheckAuthAction} from "client/reducers/user/actions";
import FormGroup from "client/components/FormGroup";
import {isSuccessFormResponse} from "../../../../utils/api/guards";

const EditField: Props = ({
                              field,
                              initialValues,
                              placeholder
                          }) => {
    const [showLoading, updateUser] = useRequest();

    const [state, setState] = useState<FormState>('normal');

    useEffect(() => setState(showLoading ? 'loading' : state), [showLoading]);

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const {form, submitCallback} = useForm<Record<keyof UserUpdateAttributes, Validations>>(
        userUpdateRules,
        (data, form, apply) => {
            updateUser(() => user.update(data).then((response) => {
                    setState(apply(response) ? 'success' : 'normal');

                    if (isSuccessFormResponse<UserDTO>(response)) {
                        dispatch(createCheckAuthAction(response.data ?? null));
                    }
                })
            );
        },
        initialValues
    );

    const resetModal = () => {
        setState('normal');
        form[field].setValue(initialValues[field]);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
        if (showModal) {
            resetModal();
        }
    }

    return (
        <div>
            <Modal handleClose={toggleModal}  title={`Edit field ${placeholder}`} active={showModal}>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submitCallback();
                    }}
                    state={state}
                >
                    {Object.entries(initialValues).map(([attribute, value]) => {
                        return <input type={'hidden'} key={attribute} name={attribute} value={value} />;
                    })}
                    <FormGroup errors={form[field].displayErrors}>
                        <Input {...makeInputValidationProps(form[field])} placeholder={placeholder} />
                    </FormGroup>
                    <Spacing size={'sm'} />
                    <Button type={'submit'}>Save</Button>
                </Form>
            </Modal>
            <EditableField displayValue={initialValues[field]} placeholder={placeholder} onClick={toggleModal} />
        </div>
    );
};

export default EditField;