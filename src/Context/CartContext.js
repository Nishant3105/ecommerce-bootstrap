import React, { useState } from 'react'

const CartContext = React.createContext({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: (id) => { }
})

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    const addToCartHandler = (prod) => {
        console.log(prod)
        const existingProduct = cartItems.find((cartproduct) => cartproduct.id === prod.id)
        if (existingProduct) {
            const updatedProducts = cartItems.map((cartprod) =>
                cartprod.id !== prod.id ?
                    cartprod : { ...existingProduct, quantity: Number(existingProduct.quantity) + 1 }
            )
            setCartItems(updatedProducts)
        }
        else {
            setCartItems([...cartItems, { ...prod, quantity: 1 }])
        }
    }

    const removeFromCartHandler = (id) => {
        console.log(id)
        const updatedProducts = cartItems.filter((cartproduct) => cartproduct.id !== id)
        setCartItems(updatedProducts)
    }

    const ContextValue = {
        cartItems: cartItems,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler
    }
    return (
        <CartContext.Provider value={ContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext