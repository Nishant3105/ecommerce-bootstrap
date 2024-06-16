import React from 'react'
import Headers from '../component/Header'
import Footer from '../component/Footer'
import Card from '../UI/Card'

const RootLayout = (props) => {
  return (
    <Card>
      <Headers />
      <main style={{flex:'1'}}>
        {props.children}
      </main>
      <Footer />
    </Card>
  )
}

export default RootLayout