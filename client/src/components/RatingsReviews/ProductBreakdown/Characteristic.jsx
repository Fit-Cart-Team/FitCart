import React from 'react';

// Size, Width, Comfort, Quality, Length, and Fit
//
// Size : Too small, Perfect, Too big
// Width : Too narrow, Perfect, Too Wide
// Comfort : Poor, Perfect
// Quality : Poor, Great
// Length : Too short, Perfect, Too long
// Fit : Poor, Great

const Characteristic = props => {
  let { name, rating } = props;
  let positionVal = rating / 5; // From left

  if (name === 'Size') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1"></div>
          <div className="child-bar-2"></div>
          <div className="child-bar-3"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Too small</p>
          <p style={{ display: 'inline-block', float: 'middle' }}>Perfect</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Too big</p>
        </div>
        <br />
      </div>
    );
  } else if (name === 'Width') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1"></div>
          <div className="child-bar-2"></div>
          <div className="child-bar-3"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Too narrow</p>
          <p style={{ display: 'inline-block', float: 'middle' }}>Perfect</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Too wide</p>
        </div>
        <br />
      </div>
    );
  } else if (name === 'Comfort') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1a"></div>
          <div className="child-bar-2a"></div>
          <div className="child-bar-3a"></div>
          <div className="child-bar-4a"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Poor</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Perfect</p>
        </div>
        <br />
      </div>
    );
  } else if (name === 'Quality') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1a"></div>
          <div className="child-bar-2a"></div>
          <div className="child-bar-3a"></div>
          <div className="child-bar-4a"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Poor</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Great</p>
        </div>
        <br />
      </div>
    );
  } else if (name === 'Length') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1"></div>
          <div className="child-bar-2"></div>
          <div className="child-bar-3"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Too short</p>
          <p style={{ display: 'inline-block', float: 'middle' }}>Perfect</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Too long</p>
        </div>
        <br />
      </div>
    );
  } else if (name === 'Fit') {
    return (
      <div className="characteristic">
        <h3>{name}</h3>
        <div className="characteristic-bar-container">
          <div className="child-bar-1a"></div>
          <div className="child-bar-2a"></div>
          <div className="child-bar-3a"></div>
          <div className="child-bar-4a"></div>
          <i
            className="fas fa-caret-down"
            style={{ left: `${Math.round(positionVal * 100)}%` }}
          ></i>
        </div>
        <div className="characteristic-ratings">
          <p style={{ display: 'inline-block', float: 'left' }}>Poor</p>
          <p style={{ display: 'inline-block', float: 'right' }}>Perfect</p>
        </div>
        <br />
      </div>
    );
  }
};

export default Characteristic;
