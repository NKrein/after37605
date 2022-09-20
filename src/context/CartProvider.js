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
      const newProduct = {
        item: product,
        count
      }
      setCart([...cart, newProduct])
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

  const totalProductsQty = () => {
    return cart.reduce((acc, itemCart) => acc + itemCart.count, 0)
  }

  const totalProductsPrice = () => {
    return cart.reduce((acc, itemCart) => acc + (itemCart.item.price * itemCart.count), 0)
  }

  const value = { 
    cart, 
    addToCart, 
    deleteItem, 
    clearCart,
    isInCart,
    totalProductsQty,
    totalProductsPrice
  }

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  )
};

export default CartProvider;
