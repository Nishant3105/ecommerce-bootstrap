import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../Context/CartContext';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


const MainNavigation = (props) => {
    const authCtx=useContext(AuthContext)
    const {isLoggedIn}=authCtx
    const cartCtx=useContext(CartContext)
    const noOfCartItems=cartCtx.cartItems ? cartCtx.cartItems.length: 0

    const history=useHistory()

    const location=useLocation()

    const loginHandler=()=>{
        history.push('/login')
    }
    return (
        <Navbar expand="sm" bg="dark" data-bs-theme="dark">
            <Container>
                {!authCtx.email && <Navbar.Brand>React-Bootstrap</Navbar.Brand>}
                {authCtx.email && <Navbar.Brand>Hi! {authCtx.email.split("@")[0]}</Navbar.Brand>}
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
                {location.pathname === '/productlist' && <button type="button" className="btn btn-primary position-relative" onClick={props.onClick}>
                    Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">{noOfCartItems} <span className="visually-hidden">unread messages</span></span>
                </button>}
                {!isLoggedIn && <Button variant="primary" className='ms-2' onClick={loginHandler}>
                    Login
                </Button>}
                {isLoggedIn && <Button variant="primary" className='ms-2' onClick={()=>authCtx.logout()}>
                    Logout
                </Button>}
            </Container>
        </Navbar>
    )
}

export default MainNavigation