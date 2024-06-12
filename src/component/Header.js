import React,{useState} from 'react'
import MainNavigation from './MainNavigation'
import Cart from './Cart'

const Headers = () => {
    const [showCart,setShowCart]=useState(false)

  const onClickHandler=()=>{
    console.log('clicked')
    setShowCart(prevState=>!prevState)
    console.log('clicked2')
    }
    
    const onCloseHandler=()=>{
    setShowCart(prevState=>!prevState)
  }
  return (
    <>
    <header>
        <MainNavigation onClick={onClickHandler}/>
        <div className="w-100 p-2 mb-2 text-center text-bg-primary">E-Commerce App</div>
    </header>
    {showCart && <Cart onClose={onCloseHandler}/>}
    </>
  )
}

export default Headers