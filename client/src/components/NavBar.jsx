import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="active imgs">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bags-8-859849.png" />
          {/* Home */}
        </Link>
      </li>
      <li>
        <Link to="/1">Onesie</Link>
      </li>
      <li>
        <Link to="/2">Sunglasses</Link>
      </li>
      <li>
        <Link to="/3">Joggers</Link>
      </li>
      <li>
        <Link to="/4">Slacks</Link>
      </li>
      <li>
        <Link to="/5">Shoes</Link>
      </li>
      <li className="float">
        <input className="search-text" type="text"></input>
        <div className="fa fa-search search-button"></div>
      </li>
    </ul>
  );
};

export default NavBar;
