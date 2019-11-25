import React from 'react';
import {Button} from "react-bootstrap";

const CustomButton = (props) => {
    return(
        <Button
            style={{margin:"10px"}}
            className={props.className}
            onClick={() => props.handleShow(props.index)}>
            {props.children}
        </Button>
    );
};

export default CustomButton;