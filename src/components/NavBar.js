import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  //const categories = ["electronics","jewelery","men's clothing","women's clothing"];

  return (
          <nav className='navBar'>
            <Link to='/' >E-commerce</Link>
            <Link to='/cart' ><CartWidget/></Link>
            <Link to='/cat/electronics' >electronics</Link>
            <Link to='/cat/jewelery' >jewelery</Link>
          </nav>
  )
}

export default NavBar;
