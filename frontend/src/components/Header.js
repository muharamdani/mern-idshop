import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#">IDShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>Cart</Nav.Link>
                            <Nav.Link>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
