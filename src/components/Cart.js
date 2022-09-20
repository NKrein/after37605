import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartProvider'
import CartItem from './CartItem';

const Cart = () => {

  const { cart, clearCart, totalProductsPrice } = useContext(cartContext);

  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
        :
        <div className='CartContainer'>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          <button className='button' onClick={() => clearCart()}>Clear Cart</button>
          <b>Total: ${totalProductsPrice()}</b>
        </div>
      }
    </>
  )
}

export default Cart
