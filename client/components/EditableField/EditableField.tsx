import React, {useState} from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Card from "../Card";
import Modal from "../Modal";
import Input from "../Input";

const EditableField: Props = ({}) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <Modal handleClose={toggleModal} title={'test'} active={showModal}>
                <Input value={''} />
            </Modal>
            <Card>
                <div className={css.inner} onClick={toggleModal}>
                    <div>
                        <div className={css.name}>name</div>
                        <div className={css.value}>Pladimir Vudin</div>
                    </div>
                    <div className={css.extra}>edit</div>
                </div>
            </Card>
        </>
    );
};

export default EditableField;