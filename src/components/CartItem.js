import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

const CartItem = ({ prod }) => {

  const { deleteItem } = useContext(cartContext);

  return (
      <div>
        <h3>{prod.item.title}</h3>
        <p>quantity: {prod.count}</p> 
        <button onClick={() => deleteItem(prod.item.id)}>Delete</button>
      </div>
  )
};

export default CartItem;
