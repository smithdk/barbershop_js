import React from 'react';
import {Alert} from "react-bootstrap";

const AlertMessage = ({show, message, type}) => {
    return(
        show ?
        <Alert variant= {type} className="m-2 p-2 d-block" >{message}</Alert>
         :
        <Alert variant= {type} className="m-2 p-2  d-none" >{message}</Alert>
    )
};

AlertMessage.defaultProps = {show: true, message: "Ошибка", type: 'danger'}
export default AlertMessage;