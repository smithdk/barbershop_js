import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap"
import Card from "react-bootstrap/Card";
import {/*useLocation*/useNavigate} from "react-router-dom";
import AlertMessage from "../components/AlertMessage"
import {ERR_USER_NOT_FOUND, USER_ROUTE} from "../utils/consts";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
//    const location = useLocation()
    const navigate = useNavigate()
    const [alertVisible, setAlertVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const inputFocus = () => {
        setAlertVisible(false)
        return true
    }
    const buttonClick = async () => {
        try {
            const data = await login(username, password);
            localStorage.setItem('user_family_name',data.family_name)
            localStorage.setItem('user_name',data.name)
            localStorage.setItem('user_surname',data.surname)
            localStorage.setItem('user_role',data.role)
            navigate(USER_ROUTE)
        }  catch (e) {
            setAlertVisible(true)
        }
    }
    return (
    <>
      <Container fluid className="fixed-top p-0" >
         <AlertMessage show={alertVisible} message= {ERR_USER_NOT_FOUND}  type="danger"/>
       </Container>
       <Container
            className="d-flex justify-content-center align-items-center "
            style={{height: window.innerHeight - 100}}
        >
           <Card style={{width: 600}} className="p-4">
               <h2 className="m-auto">Авторизация</h2>
               <Form className="d-flex flex-column">
                   <Form.Control
                       className="mt-3"
                       placeholder="Введите логин"
                       onFocus={inputFocus}
                       value={username}
                       onChange={e => setUsername(e.target.value)}
                   />
                   <Form.Control
                       type="password"
                       className="mt-3"
                       placeholder="Введите пароль"
                       onFocus={inputFocus}
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                   />
                   <Button className="mt-3 align-self-end" onClick={buttonClick} > Войти </Button>
               </Form>
           </Card>
      </Container>
    </>
    );
});

export default Login;