import React from 'react'
import { Container } from 'react-bootstrap'
import ReactDOM from 'react-dom'

const ModalOverlay=(props)=>{
    return (
        <Container className='m-5 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3' style={{position:'fixed',zIndex:'30'}}>
            {props.children}
        </Container>
    )
}

const CartModal = (props) => {
    const portalElement=document.getElementById('modal-root')
  return (
    ReactDOM.createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,portalElement)
  )
}

export default CartModal