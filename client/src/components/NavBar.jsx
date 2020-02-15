import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const [dark, setDark] = useState(false);

  return (
    <ul>
      <li>
        <Link to="/" className="active" className="logo">
          FitCart
        </Link>
      </li>
      <li>
        <div id="theme-toggle" onClick={prev => setDark(!prev)}>
          <span className="toggle-icon">☀️</span>
          <span className="toggle-icon">
            <i
              className={`fa fa-toggle-on ${
                dark ? '' : 'fa-flip-horizontal'
              } fa-2x`}
            ></i>
          </span>
          <span className="toggle-icon">🌙</span>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
