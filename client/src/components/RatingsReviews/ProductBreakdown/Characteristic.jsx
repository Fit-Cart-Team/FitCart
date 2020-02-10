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

  return (
    <div>
      <h3>Characteristic Component</h3>
    </div>
  );

  if (name === 'Size') {
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bar: {positionVal}</h4>
        <p>Too small</p>
        <p>Perfect</p>
        <p>Too big</p>
      </div>
    );
  } else if (name === 'Width') {

  } else if (name === 'Comfort') {

  } else if (name === 'Quality') {

  } else if (name === 'Length') {

  } else if (name === 'Fit') {

  }
}

export default Characteristic;