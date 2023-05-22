import React from 'react';
import {Button, Container, Form} from "react-bootstrap"
import Card from "react-bootstrap/Card";



const Login = () => {
    return (
        <Container
            className=" d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight}}
        >
           <Card style={{width: 600}} className="p-4">
               <h2 className="m-auto">Авторизация</h2>
               <Form className="d-flex flex-column">
                   <Form.Control className="mt-3" placeholder="Введите логин"  />
                   <Form.Control type="password" className="mt-3" placeholder="Введите пароль" />
                   <Button className="mt-3 align-self-end"> Войти </Button>

               </Form>
           </Card>
        </Container>
    );
};

export default Login;