import React from 'react';
import Stars from '../../../Stars';

const RatingSummary = (props) => {
  let average = (Math.round(props.ratingAverage * 10) / 10).toFixed(1);

  return (
    <div>
      <h3 style={{"display": "inline-block", margin: "5px"}} >{average}</h3>
      <Stars avg={average} />
    </div>
  );
}

export default RatingSummary;