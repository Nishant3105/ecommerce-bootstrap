import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartModal from '../Store/Modal'
import CartContext from '../Context/CartContext'
import { Table } from 'react-bootstrap';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount=cartCtx.cartItems ? cartCtx.cartItems.reduce((acc,cur)=>acc+=cur.quantity*cur.price,0) : 0

    const CartProducts = cartCtx.cartItems.map((prod, index) => (
        <tr id={index} key={index}>
            <td>{prod.title}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity}
                <Button variant="secondary" onClick={()=>cartCtx.removeFromCart(prod._id)} className="m-1">
                    REMOVE
                </Button>
            </td>
        </tr>
    ))
    return (
        <CartModal onClick={props.onClose}>
                <Modal.Header  className='postion-relative'>
                    <Modal.Title>Cart</Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={props.onClose} style={{position:'absolute',top:'6px',right:'20px'}}></button>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr className="p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                                <td className="text-primary">ITEM</td>
                                <td className="text-primary">PRICE</td>
                                <td className="text-primary">QUANTITY
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {cartCtx.cartItems.length===0 && <h1>There is no item in your Cart! Please add ITEMS.</h1>}
                           {CartProducts}
                            <tr>
                                <td></td>
                                <td></td>
                                <td><b>TOTAL:</b> {totalAmount}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body> 
                <Modal.Footer style={{position: 'relative', height:'8vh'}}>
                    <Button variant="secondary" onClick={props.onClose} style={{position: 'absolute',top: '0px',right: '20px'}}>
                        Close
                    </Button>
                </Modal.Footer>
        </CartModal>
    )
}

export default Cart