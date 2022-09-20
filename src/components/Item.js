import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className='item'>
      <img src={product.image} alt='product image'/>
      <div>
        <h3>{product.title}</h3>
        <p>Price ${product.price}</p>
        <Link className='button' to={`/item/${product.id}`}>View details</Link>
      </div>
    </div>
  )
}

export default Item;