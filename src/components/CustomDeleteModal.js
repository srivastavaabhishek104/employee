import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import { postRequest } from "../Helper/apiHit";
const CustomDeleteModal = (props)  => {
    console.log(props);
    
    const handleDelete = async() => {
        const data = new FormData();
        data.set("id",props.id);
        const respnse = await postRequest("index.php?apicall=delete",data);
        props.onHide();
        window.location.reload();
    };
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
                    CANCEL
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                   DELETE
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomDeleteModal;