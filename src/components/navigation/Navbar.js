import React from 'react';
import NavItems from './NavItems';
;



const Navbar = () => {
  return (
    <nav className='fx-row nav-container'>
        <img src="./img/logo.png" className="header-logo"/>
        <NavItems />
    </nav>
    )
};

export default Navbar;
