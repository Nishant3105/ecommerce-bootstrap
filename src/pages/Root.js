import React from 'react'
import Headers from '../component/Header'
import Footer from '../component/Footer'

const RootLayout = (props) => {
  return (
    <>
    <Headers/>
    {props.children}
    <Footer/>
    </>
  )
}

export default RootLayout