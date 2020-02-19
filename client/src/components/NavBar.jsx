import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = ({ setdark, dark, cartAmount }) => {
  const history = useHistory();

  return (
    <ul>
      <li>
        <Link to="/" className="active" className="logo">
          FitCart
        </Link>
      </li>
      <li className="theme-toggle">
        <i className="fas fa-sun"></i>
        <span className="toggle-icon" onClick={() => setdark(prev => !prev)}>
          <i
            className={`fa fa-toggle-on ${
              dark ? '' : 'fa-flip-horizontal'
            } fa-2x`}
          ></i>
        </span>
        <i className="fas fa-moon"></i>
      </li>
      <li className="cart-nav">
        <i className="fas fa-shopping-cart"></i>
        Cart
        <span className="cart-amount">{cartAmount}</span>
      </li>
    </ul>
  );
};

export default NavBar;
