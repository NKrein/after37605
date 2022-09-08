import React from 'react';

const Item = ({ product }) => {
  return (
    <div className='item'>
      <img src={product.image} alt='product image' />
      <div>
        <h3>{product.title}</h3>
        <p>Price ${product.price}</p>
        <button className='button'>View details</button>
      </div>
    </div>
  )
}

export default Item;