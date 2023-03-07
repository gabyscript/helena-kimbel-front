
import './BarraNav.css';

import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const BarraNav = () =>{

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="navbar">            
            <Container>
                <Navbar.Brand className="w-25">
                    <NavLink to="/home" className="home-link">
                        HELENA KIMBEL
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />                
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto p-3">
                        <LinkContainer to="/bio" className="px-5">
                            <Nav.Link  className="nav-links">
                                Bio
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/galeria" className="px-5">
                            <Nav.Link  className="nav-links">
                                Galería
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto" className="px-5">
                            <Nav.Link  className="nav-links">
                                Contáctame
                            </Nav.Link>
                        </LinkContainer>     
                        <LinkContainer to="/faq" className="px-5">
                            <Nav.Link  className="nav-links">
                                FAQ
                            </Nav.Link>
                        </LinkContainer>                  
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BarraNav;