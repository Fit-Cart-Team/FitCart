import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = ({ setdark, dark }) => {
  const history = useHistory();

  return (
    <ul>
      <li>
        <Link to="/" className="active" className="logo">
          FitCart
        </Link>
      </li>
      <li class="theme-toggle">
        <i class="fas fa-sun"></i>
        <span className="toggle-icon" onClick={() => setdark(prev => !prev)}>
          <i
            className={`fa fa-toggle-on ${
              dark ? '' : 'fa-flip-horizontal'
            } fa-2x`}
          ></i>
        </span>
        <i class="fas fa-moon"></i>
      </li>
      <li className="cart-nav">
        <i class="fas fa-shopping-cart"></i>
        Cart
        <span className="cart-amount">3</span>
      </li>
    </ul>
  );
};

export default NavBar;
