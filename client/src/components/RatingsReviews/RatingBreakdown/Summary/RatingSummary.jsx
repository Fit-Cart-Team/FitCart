import React from 'react';
import Stars from '../../../Stars';

const RatingSummary = (props) => {
  let average = (Math.round(props.ratingAverage * 10) / 10).toFixed(1);

  return (
    <div className="ratings-summary" >
      <h3 style={{"display": "inline-flex", margin: "5px", "font-size": "50px", "font-weight": "bold"}} >{average}</h3>
      <div className="rating-breakdown-stars-container" >
        <Stars avg={average} />
      </div>
    </div>
  );
}

export default RatingSummary;