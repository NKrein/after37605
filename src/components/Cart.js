import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartProvider'
import CartItem from './CartItem';

const Cart = () => {

  const { cart, clearCart } = useContext(cartContext);
  // const [user, setUser] = useState({
  //   name: 'Matias',
  //   phone: '0213123091204',
  //   email:'mati@gmail.com'
  // })
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')

  //{ buyer: { name, phone, email }, items: [{id, title, price}], total  }
  const newOrder = {
    buyer: {
      name: userName,
      phone: userPhone,
      email: userEmail,
    },
    items: cart,
    total: 'total'
  }

  // useEffect(() => {

  // }, [])

  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      }
    </>
  )
}

export default Cart
