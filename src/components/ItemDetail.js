import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartProvider';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

  const { addToCart, isInCart, deleteItem } = useContext(cartContext);


  const onAdd = (count) => {
    console.log(`Agregaste ${product.title}, cantidad: ${count}.`);
    addToCart(product, count);
  }

  if (!product.id) return (
    <div>
      <p>Error, 404 not found.</p>
      <p>Try later.</p>
    </div>
  )

  return (
      <div className='itemDetail'>
        <div>
          <img src={product.image} alt={product.title} width='500px' />
        </div>
        <div>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Price <b>${product.price}</b></p>
          <p>{product.description}</p>
          {isInCart(product.id) ?
            <div>
              <p>Already in cart</p>
              <button className='button' onClick={() => deleteItem(product.id)}>Delete from cart</button>
            </div>
            :
            <p>Add now!</p>
          }
          {(isInCart(product.id)) ? <Link to='/cart'>Go to Cart</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }

        </div>
      </div>
  )
}

export default ItemDetail;
