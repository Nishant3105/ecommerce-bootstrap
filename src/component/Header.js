import React from 'react'
import MainNavigation from './MainNavigation'

const Headers = () => {
  return (
    <header>
        <MainNavigation/>
        <div className="w-100 p-2 mb-2 text-center text-bg-primary">E-Commerce App</div>
    </header>
  )
}

export default Headers