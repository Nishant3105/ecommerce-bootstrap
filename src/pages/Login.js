import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../Context/AuthContext';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const authCtx=useContext(AuthContext)
    const emailRef=useRef()
    const passwordRef=useRef()
    const history=useHistory()
    
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredEmail = emailRef.current.value
        const enteredPassword = passwordRef.current.value
        const formData = {
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken: true
        }
        if(authCtx.login(formData)){
            history.replace('/productlist')
        }
    }
    return (
        <div className=' border border-dark m-5'>
            <h1 className="text-primary text-center">Login</h1>
            <Form className='m-4'>
                <Form.Group className='m-2'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" ref={emailRef}></Form.Control>
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={passwordRef}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className='m-2' onClick={submitHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login