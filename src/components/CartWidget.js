import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

const CartWidget = () => {

  const { totalProductsQty } = useContext(cartContext);

  return (
    <>
      Cart {(totalProductsQty() != 0) && <span className='badge'>{totalProductsQty()}</span>}
    </>
  )
}

export default CartWidget;
