import Paragraph from "client/components/@typography/Paragraph";
import { Button } from "client/components/Button";
import Link from "client/components/Link";
import Modal from "client/components/Modal";
import Spacing from "client/components/Spacing";
import useIsAuth from "client/hooks/useIsAuth/useIsAuth";
import { ROUTES } from "client/routes";
import React, { useState } from "react";

import CreateForm from "../CreateForm";

const CreateSection = () => {
  const isAuth = useIsAuth();

  const [key, setKey] = useState(1);

  const remountModal = () => setKey(key + 1);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      remountModal();
    }
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={toggleModal}>Write topic</Button>
      <Spacing size="md" />
      <Modal
        key={key}
        title="Create topic"
        active={isModalOpen}
        handleClose={toggleModal}
      >
        {!isAuth && (
          <Paragraph>
            <Link to={ROUTES.SIGN_IN.INDEX}>Sign in</Link> first to create topic
          </Paragraph>
        )}
        {isAuth && <CreateForm />}
      </Modal>
    </>
  );
};

export default CreateSection;
