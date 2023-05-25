import React,{useState} from 'react';
import {Button, Container, Form} from "react-bootstrap"
import Card from "react-bootstrap/Card";
//import {useLocation,useNavigate} from "react-router-dom";
import AlertMessage from "../components/AlertMessage"

const Login = () => {
//    const location = useLocation()
//    const navigate = useNavigate()
    const [alertVisible, setAlertVisible] = useState(false)

     const inputFocus = () => {
        console.log("inputChange")
        setAlertVisible(false)
        return true
    }
    const buttonClick = () => {
        setAlertVisible(!alertVisible)
    }

    return (
    <>
      <Container fluid className="fixed-top p-0" >
         <AlertMessage show={alertVisible} message="Ошибка 1" type="danger"/>
       </Container>
       <Container
            className="d-flex justify-content-center align-items-center "
            style={{height: window.innerHeight - 100}}
        >
           <Card style={{width: 600}} className="p-4">
               <h2 className="m-auto">Авторизация</h2>
               <Form className="d-flex flex-column">
                   <Form.Control className="mt-3" placeholder="Введите логин" onFocus={inputFocus} />
                   <Form.Control type="password" className="mt-3" placeholder="Введите пароль" onFocus={inputFocus} />
                   <Button className="mt-3 align-self-end" onClick={buttonClick} > Войти </Button>
               </Form>
           </Card>
      </Container>
    </>
    );
};

export default Login;