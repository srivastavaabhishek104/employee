import Modal from "react-bootstrap/Modal";
import React, {useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import { postRequest } from "../Helper/apiHit";
const CustomModal = (props)  => {
    const {id,title,btntitle,employees} = props

    const[name,setName] = useState("");
    const[designation,setDesignation] = useState("");
    const[salary,setSalary] = useState("");

    const[nameError,setNameError] = useState("");
    const[designationError,setDesignationError] = useState("");
    const[salaryError,setSalaryError] = useState("");

    useEffect(() => {
        if(id !== -1) {
            const employee = employees.find(employee => employee.id === id);
            if(employee) {
                setName(employee.name)
                setSalary(employee.salary)
                setDesignation(employee.designation)
                
            } else{
                setName("")
                setSalary("")
                setDesignation("")
            }
            setNameError("")
            setSalaryError("")
            setDesignationError("")
        }
    },[props]);

    const onChangeHandler = (event) => {
        const{name,value} = event.target;
        switch (name) {
            case "name": setName(value);setNameError("");break;
            case "designation": setDesignation(value);setDesignationError("");break;
            case "salary": setSalary(value);setSalaryError("");break;
            default:break;
        }
    };
    const formHandler = async (event) => {
        event.preventDefault();
        let status=true;
        
        if(name === "") {
            setNameError("Name shouldn't be empty!!!");
            status = false
        }
        if(designation === "") {
            setDesignationError("Designation shouldn't be empty!!!");
            status = false
        }
        if(salary === "") {
            setSalaryError("Salary shouldn't be empty!!!");
            status = false
        }

        if(status) {
            console.log(status);
            
            if(id === undefined) {
                const data = new FormData();
                data.set("name",name.trim());
                data.set("salary",salary.trim());
                data.set("designation",designation.trim());
                const respnse = await postRequest("index.php?apicall=create",data);
                console.log(respnse);
                
                props.onHide();
                window.location.reload();
            } else {
                const data = new FormData();
                data.set("name",name.trim());
                data.set("salary",salary.trim());
                data.set("designation",designation.trim());
                data.set("id",id.trim());
                
                const respnse = await postRequest("index.php?apicall=edit",data);
                console.log(respnse);
                props.onHide();
                window.location.reload();
            }
            
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formHandler}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            defaultValue={name}
                            onChange={onChangeHandler}
                        />
                        <span style={{color:"red"}}>{nameError ? nameError :""}</span>
                    </Form.Group>
                    <Form.Group controlId="formGroupDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            name="designation"
                            type="text"
                            placeholder="Designation"
                            defaultValue={designation}
                            onChange={onChangeHandler}
                        />
                        <span style={{color:"red"}}>{designationError ? designationError :""}</span>
                    </Form.Group>
                    <Form.Group controlId="formGroupSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            name="salary"
                            type="number" placeholder="Salary"
                            defaultValue={salary}
                            onChange={onChangeHandler}
                        />
                        <span style={{color:"red"}}>{salaryError ? salaryError :""}</span>
                    </Form.Group>
                    <Form.Group controlId="formGroupSalary">
                        <Form.Control
                            name="submit"
                            type="submit"
                            className="btn btn-primary"
                            value={btntitle}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CustomModal;