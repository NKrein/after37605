import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <a>E-commerce</a>
      <a>electronics</a>
      <a>jewelery</a>
      <a><CartWidget /></a>
    </nav>
  )
}

export default NavBar;