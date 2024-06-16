import React, { useState, useEffect, useCallback } from 'react'


const CartContext = React.createContext({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: (id) => { }
})

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    const url = "https://crudcrud.com/api/d0521eaaf559492797801cc18f1cddbd/cart"
    const email = localStorage.getItem('email') || ''
    // const urlemail=email.split('@').join('').split('.').join('')
    const urlemail = email.replace(/[@.]/g, '')

    const getCartItems = useCallback(async () => {
        try {
            const response = await fetch(`${url}${urlemail}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            else if (response.ok) {
                const data = await response.json()
                setCartItems(data)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }, [url, urlemail])



    useEffect(() => {
        getCartItems()
    }, [getCartItems])


    const addToCartHandler = async (prod) => {
        try {
            const existingProduct = cartItems.find((cartproduct) => cartproduct.id === prod.id)
            if (existingProduct) {
                const updatedProducts = cartItems.map((cartprod) =>
                    cartprod.id !== prod.id ?
                        cartprod : { ...existingProduct, quantity: Number(existingProduct.quantity) + 1 }
                )
                const urlId=existingProduct._id
                delete existingProduct._id //remove _id from the object before PUT
                // setCartItems(updatedProducts)
                const response = await fetch(`${url}${urlemail}/${urlId}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...existingProduct, quantity: Number(existingProduct.quantity) + 1 })
                    })

                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                else if (response.ok) {
                    setCartItems(updatedProducts)
                }
            }
            else {
                // setCartItems([...cartItems, { ...prod, quantity: 1 }])
                const response = await fetch(`${url}${urlemail}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...prod, quantity: 1 })
                    })

                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                else if (response.ok) {
                    const data = await response.json()
                    // console.log(data)
                    setCartItems([...cartItems, data])
                }
            }
        } catch (error) {
            console.log('Please check your credentials')

        }
    }

    const removeFromCartHandler = async (id) => {
        try {
            const updatedProducts = cartItems.filter((cartproduct) => cartproduct._id !== id)
            // setCartItems(updatedProducts)
            const response = await fetch(`${url}${urlemail}/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            else if (response.ok) {
                setCartItems(updatedProducts)
            }
        }
        catch (error) {
            console.log(error.message)
        }
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