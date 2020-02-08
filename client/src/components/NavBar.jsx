import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const [searchVal, setsearchVal] = useState('');

  const keyChange = e => {
    if (e.key === 'Enter' || e.key === 'Return') {
      history.push(searchVal);
    }
  };
  const clickChange = e => {
    history.push(searchVal);
  };
  return (
    <ul>
      <li>
        <Link to="/" className="active">
          {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bags-8-859849.png" /> */}
          <u>Lo</u>g<u>o</u>
        </Link>
      </li>
      <li className="search-bar">
        <input
          className="search-text"
          type="text"
          onChange={e => {
            setsearchVal(e.target.value);
          }}
          onKeyPress={keyChange}
        ></input>
        <div className="fa fa-search search-button" onClick={clickChange}></div>
      </li>
    </ul>
  );
};

export default NavBar;
