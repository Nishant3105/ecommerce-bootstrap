import React from 'react'

const Card = (props) => {
  return (
    <div style={{display: 'flex',flexDirection: 'column',minHeight: '100vh'}}>{props.children}</div>
  )
}

export default Card