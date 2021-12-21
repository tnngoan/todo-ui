import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import OutlineText from "./OutlineText";

export default function NiceModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        color="green"
        type="button"
        onClick={(e) => setShowModal(true)}
        ripple="light"
      >
        New card
      </Button>

      <Modal
        size="regular"
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowModal(false)}>
          New todo:
        </ModalHeader>
        <ModalBody>
          <OutlineText />
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Cancel
          </Button>

          <Button
            color="green"
            onClick={(e) => setShowModal(false)}
            ripple="light"
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
