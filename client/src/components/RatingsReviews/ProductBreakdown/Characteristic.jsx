import React from 'react';

// Size, Width, Comfort, Quality, Length, and Fit
//
// Size : Too small, Perfect, Too big
// Width : Too narrow, Perfect, Too Wide 
// Comfort : Poor, Perfect
// Quality : Poor, Great 
// Length : Too short, Perfect, Too long 
// Fit : Poor, Great 

const Characteristic = (props) => {
  let {name, rating} = props;
  let positionVal = rating / 5; // From left

  if (name === 'Size') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Too small</p>
        <p style={{display: "inline-block", "float": "middle"}}>Perfect</p>
        <p style={{display: "inline-block", "float": "right"}}>Too big</p>
        <br/>
      </div>
    );
  } else if (name === 'Width') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Too narrow</p>
        <p style={{display: "inline-block", "float": "middle"}}>Perfect</p>
        <p style={{display: "inline-block", "float": "right"}}>Too wide</p>
        <br/>
      </div>
    );
  } else if (name === 'Comfort') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Poor</p>
        <p style={{display: "inline-block", "float": "right"}}>Perfect</p>
        <br/>
      </div>
    );
  } else if (name === 'Quality') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Poor</p>
        <p style={{display: "inline-block", "float": "right"}}>Great</p>
        <br/>
      </div>
    );
  } else if (name === 'Length') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Too short</p>
        <p style={{display: "inline-block", "float": "middle"}}>Perfect</p>
        <p style={{display: "inline-block", "float": "right"}}>Too long</p>
        <br/>
      </div>
    );
  } else if (name === 'Fit') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p style={{display: "inline-block", "float": "left"}}>Poor</p>
        <p style={{display: "inline-block", "float": "right"}}>Perfect</p>
        <br/>
      </div>
    );
  }
}

export default Characteristic;