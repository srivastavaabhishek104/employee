import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
const CustomDeleteModal = (props)  => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you Sure you want to Delete?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomDeleteModal;