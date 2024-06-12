import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNavigation = (props) => {
    return (
        <Navbar expand="sm" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                <button type="button" className="btn btn-primary position-relative" onClick={props.onClick}>
                    Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span className="visually-hidden">unread messages</span></span>
                </button>
            </Container>
        </Navbar>
    )
}

export default MainNavigation