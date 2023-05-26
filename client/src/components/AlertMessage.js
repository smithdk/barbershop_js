import React from 'react';
import {Alert} from "react-bootstrap";
import {ERR_DEFAULT} from "../utils/consts";

const AlertMessage = ({show, message, type}) => {
    return(
        show ?
            <Alert variant= {type} className="m-2 p-2 ps-3 d-block" >{message} </Alert>
         :
        <Alert variant= {type} className="m-2 p-2  d-none" >{message}</Alert>
    )
};

AlertMessage.defaultProps = {show: true, message: ERR_DEFAULT, type: 'danger'}
export default AlertMessage;