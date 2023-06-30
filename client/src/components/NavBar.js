import {observer} from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form, Nav, NavDropdown} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../index";
import {ADMIN_ROUTE, ROOT_ROUTE, USER_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";


const NavBar = observer(({role}) =>{
    const {user} = useContext(Context)

    const navigate = useNavigate()
    let BG_COLOR, VARIANT, ICON, FONT_COLOR, BUTTON_VARIANT, ROLE_NAME
    switch (user.userRole){
        case 'ROOT' : ROLE_NAME = process.env.REACT_APP_ROOT_ROLENAME; break;
        case 'ADMIN': ROLE_NAME = process.env.REACT_APP_ADMIN_ROLENAME; break;
        case 'USER' : ROLE_NAME = ''; break;
        default: break;
    }
    switch (role){
        case 'ROOT': BG_COLOR = process.env.REACT_APP_NB_BG_COLOR_ROOT;
                     VARIANT = process.env.REACT_APP_NB_VARIANT_DARK;
                     ICON = process.env.REACT_APP_NB_ICON_LIGHT;
                     //ROLE_NAME= process.env.REACT_APP_ROOT_ROLENAME;
                     FONT_COLOR = "white";
                     BUTTON_VARIANT = "outline-light"
                     break;
        case 'ADMIN': BG_COLOR = process.env.REACT_APP_NB_BG_COLOR_ADMIN;
                     VARIANT = process.env.REACT_APP_NB_VARIANT_LIGHT;
                     ICON = process.env.REACT_APP_NB_ICON_DARK;
                     //ROLE_NAME= process.env.REACT_APP_ADMIN_ROLENAME;
                     FONT_COLOR = "black";
                     BUTTON_VARIANT = "outline-dark"
                     break;
        case 'USER': BG_COLOR = process.env.REACT_APP_NB_BG_COLOR_USER;
                     VARIANT = process.env.REACT_APP_NB_VARIANT_DARK;
                     ICON = process.env.REACT_APP_NB_ICON_LIGHT;
                     //ROLE_NAME= process.env.REACT_APP_USER_ROLENAME;
                     FONT_COLOR = "white";
                     BUTTON_VARIANT = "outline-light"
        break;
        default: BG_COLOR = 'light'
    }
    const buttonClick = () =>{
        /*user.setUser({})*/
        user.setUserRole('NONE')
    }

    const itemClick = (itemRole) =>{
        switch (itemRole){
            case 'ROOT': navigate(ROOT_ROUTE); break;
            case 'ADMIN': navigate(ADMIN_ROUTE); break;
            case 'USER': navigate(USER_ROUTE); break;
            default: break;
        }
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary m-1" bg={BG_COLOR} variant={VARIANT}>
            <Container fluid>
                <Navbar.Brand >
                    <img
                        alt=""
                        src={ICON}
                        width="30"
                        height="30"
                    />{' '}
                    Barbershop.js
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <span className="me-4 m-auto"   style={{color: FONT_COLOR}}>Шагане</span>
                    </Nav>
                    <Form className="d-flex">
                        <span className="me-4 m-auto" style={{color: FONT_COLOR}}>{ROLE_NAME}</span>
                        { (user.userRole === 'ROOT' || user.userRole === 'ADMIN') &&
                            ( <NavDropdown className="me-4 m-auto"
                                title="Перейти"
                                id="navbarScrollingDropdown"
                                style={{color: FONT_COLOR}}>
                                {user.userRole === 'ROOT' &&
                                (<NavDropdown.Item onClick={() => itemClick('ROOT')} >
                                    {process.env.REACT_APP_ROOT_ROLENAME}
                                </NavDropdown.Item>)}

                                {(user.userRole === 'ROOT' || user.userRole === 'ADMIN') &&
                                (<NavDropdown.Item onClick={() => itemClick('ADMIN')} >
                                    {process.env.REACT_APP_ADMIN_ROLENAME}
                                </NavDropdown.Item>)}

                                <NavDropdown.Item onClick={() => itemClick('USER')} >
                                    {process.env.REACT_APP_USER_ROLENAME}
                                </NavDropdown.Item>
                            </NavDropdown>)
                        }
                        <Button variant={BUTTON_VARIANT} onClick={buttonClick} >Выход</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;


