import React, {useState,useEffect} from 'react';
import './App.css';
import {Card, Col, Row, Table} from "react-bootstrap";
import {EMPLOYEE} from './data/employee-data';
import CustomRow from "./components/CustomRow";
import Container from "react-bootstrap/Container";
import CustomModal from "./components/CustomModal";
import CustomButton from "./components/CustomButton";
import {getRequest} from './Helper/apiHit'
const App = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const [employee,setEmployee] = useState([]);

     useEffect(() => {
        const fetchData = async() => {
            const response = await getRequest('index.php?apicall=show');
            console.log(response);
            if(!response.data.error) {
                setEmployee(response.data.users);
                //console.log(response.data.users[0]);
            }
        };
        fetchData();
    },[]);

    return (
        <Container style={{marginTop:"30px"}}>
            <Row>
                <Card style={{ width: '400px',marginLeft:"14px",marginBottom:"20px" }}>
                    <Row>
                        <Col>Employee Name: </Col>
                        <Col>{employee[0]? employee[0].name : ""}</Col>
                    </Row>
                    <Row>
                        <Col>Employee Designation: </Col>
                        <Col>{employee[0]? employee[0].designation:""}</Col>
                    </Row>
                    <Row>
                        <Col>Employee Salary: </Col>
                        <Col>{employee[0]? employee[0].salary:""}</Col>
                    </Row>
                </Card>
                <CustomButton
                    handleShow={handleModalShow}>
                    Create
                </CustomButton>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                            <CustomRow employees = {employee} />
                    </Table>
                </Col>
            </Row>
            <CustomModal
                show={modalShow}
                onHide={handleModalClose}
                title="Create Employee"
                btntitle="Create"
                employees={employee}
            />

        </Container>
    );
};

export default App;
