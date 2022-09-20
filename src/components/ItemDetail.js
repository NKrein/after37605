import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAdd, added }) => {
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

          {added ? <Link to='/cart'>Go to Cart</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }

        </div>
      </div>
  )
}

export default ItemDetail;
