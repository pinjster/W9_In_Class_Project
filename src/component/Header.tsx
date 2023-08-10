import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/esm/Nav';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function Header() {

    const { user } = useContext(UserContext) 

    return (

        <Navbar sticky="top" className="header">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Matrix Fakebook</Navbar.Brand>
            </Container>

            { user.username ? (
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/logout">Log Out</Nav.Link>
                </Nav.Item>
            ) :
                <>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                    </Nav.Item>
                </>  
            }
        </Navbar>
    )
}
