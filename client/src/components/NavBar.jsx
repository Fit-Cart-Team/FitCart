import React from 'react';

const NavBar = () => {
  return (
    // <div className="nav-bar">
    // <img
    //   src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bags-8-859849.png"
    //   className="logo"
    // ></img>
    // </div>
    <ul>
      <li>
        <a href="/" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="/1">Onesie</a>
      </li>
      <li>
        <a href="/2">Sunglasses</a>
      </li>
      <li>
        <a href="/3">Joggers</a>
      </li>
      <li>
        <a href="/4">Slacks</a>
      </li>
      <li>
        <a href="/5">Shoes</a>
      </li>
      <li className="float">
        <div className="search-bar">
          <input type="text"></input>
          <button>Search</button>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
