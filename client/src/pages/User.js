import React, {useContext} from 'react';
import {Context} from "../index";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, ROOT_ROUTE, USER_ROUTE} from "../utils/consts";
import NavBar from "../components/NavBar";


const User = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const buttonUserClick = async () => {
        navigate(USER_ROUTE)
    }
    const buttonAdmClick = async () => {
        navigate(ADMIN_ROUTE)
    }
    const buttonRootClick = async () => {
        navigate(ROOT_ROUTE)
    }
    return (
        <div>
            <NavBar role='USER'/>
            This is User page
            <br/>
            Role: {user.userRole}
            <br/><Button className="mt-3 align-self-end" onClick={buttonUserClick}> User </Button>
            <br/><Button className="mt-3 align-self-end" onClick={buttonAdmClick}> Admin </Button>
            <br/><Button className="mt-3 align-self-end" onClick={buttonRootClick}> Root </Button>
        </div>
    );
};

export default User;