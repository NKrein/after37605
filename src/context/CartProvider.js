import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, count) => {
    if (isInCart(product.id)){
      const indexItem = cart.findIndex(ele => ele.item.id === product.id);
      cart[indexItem].count = cart[indexItem].count + count;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: product, count }])
    }
  }

  const deleteItem = (id) => {
    const updatedCart = cart.filter(element => element.item.id !== id)
    setCart(updatedCart);
  }

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart }}>
      {children}
    </cartContext.Provider>
  )
};

export default CartProvider;
