import React from 'react'

const CartContext=React.createContext({
    cartItems:[],
    addToCart: ()=>{},
    removeFromCart: (id)=>{}
})

export const CartContextProvider=(props)=>{
    const removeCartHandler=(id)=>{

    }
    const ContextValue={
        cartItems:[],
        addToCart: ()=>{},
        removeFromCart: removeCartHandler
    }
    return (
        <CartContext.Provider value={ContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext