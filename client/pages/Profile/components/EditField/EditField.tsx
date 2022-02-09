import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import {user, UserUpdateAttributes} from "client/api/user";
import EditableField from "client/components/EditableField";
import Input from "client/components/Input";
import Modal from "client/components/Modal";
import useForm from "../../../../hooks/useForm";
import {Validations} from "../../../../hooks/useValidation";
import {userUpdateRules} from "../../../../validations/user";
import useRequest from "../../../../hooks/useRequest";
import {FormState} from "../../../../components/Form/types";
import {makeInputValidationProps} from "../../../../hooks/useInput/useInput";
import LinkButton, {Button} from "../../../../components/Button";
import Spacing from "../../../../components/Spacing";
import Form from "../../../../components/Form";
import {useDispatch} from "react-redux";
import {createCheckAuthAction} from "../../../../reducers/user/actions";
import FormGroup from "../../../../components/FormGroup";

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
                    dispatch(createCheckAuthAction(data));
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