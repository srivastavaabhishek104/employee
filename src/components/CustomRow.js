import React,{useState} from 'react';
import CustomButton from "./CustomButton";
import CustomDeleteModal from "./CustomDeleteModal";
import CustomModal from "./CustomModal";

const CustomRow = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [employeeId,setEmployeeId] = useState(-1);

    const handleClose = () => setShow(false);
    const handleShow = (employeeId) =>  {
        setEmployeeId(employeeId)
        setShow(true);
    };

    const handleModalClose = () => setModalShow(false);

    const handleModalShow = (employeeId) => {
        setEmployeeId(employeeId)
        setModalShow(true);
    };
    let sno = 1;
    return (
        <>
            <tbody>
            {
                props.employees.map((item,index) => {
                    return (
                        <tr key={item.id}>
                            <td>{sno++}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.salary}</td>
                            <td>
                                <CustomButton
                                    handleShow={handleModalShow}
                                    index={item.id}>
                                    Edit
                                </CustomButton>
                                <CustomButton
                                    className="btn btn-danger"
                                    handleShow={handleShow}
                                    index={item.id}>
                                    Delete
                                </CustomButton>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
            <CustomModal
                show={modalShow}
                onHide={handleModalClose}
                id = {employeeId === -1 ? -1 : employeeId}
                title="Update Employee"
                btntitle="Update"
                employees = {props.employees}
            />
            <CustomDeleteModal
                show={show}
                onHide={handleClose}
                id = {employeeId}
                employees = {props.employees}
            />
        </>
    );
};

export default CustomRow;