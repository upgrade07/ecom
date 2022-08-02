import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const state = useSelector((state)=>state.handleCart)
    console.log(state)
  return (
    <div>
      <h1>{state.product}</h1>
    </div>
  )
}

export default Cart
