import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactUs = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneNumberRef=useRef()

    const submitHandler=(e)=>{
        e.preventDefault()
        const enteredName=nameRef.current.value
        const enteredEmail=emailRef.current.value
        const enteredPhoneNumber=phoneNumberRef.current.value

        const formData={
            enteredName,
            enteredEmail,
            enteredPhoneNumber
        }
        console.log(formData)

        nameRef.current.value=""
        emailRef.current.value=""
        phoneNumberRef.current.value=""
    }
  return (
    <div className=' border border-dark m-5'>
    <h1 className="text-primary text-center">Contact Us</h1>
    <Form className='m-4'>
        <Form.Group className='m-2'>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" ref={nameRef} ></Form.Control>
        </Form.Group>
        <Form.Group className='m-2'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" ref={emailRef}></Form.Control>
        </Form.Group>
        <Form.Group className='m-2'>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone-Number" ref={phoneNumberRef}></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className='m-2' onClick={submitHandler}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default ContactUs