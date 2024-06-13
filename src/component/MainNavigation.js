import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';


const MainNavigation = (props) => {
    const cartCtx=useContext(CartContext)
    const noOfCartItems=cartCtx.cartItems.length
    return (
        <Navbar expand="sm" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/productlist">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
                <button type="button" className="btn btn-primary position-relative" onClick={props.onClick}>
                    Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">{noOfCartItems} <span className="visually-hidden">unread messages</span></span>
                </button>
            </Container>
        </Navbar>
    )
}

export default MainNavigation