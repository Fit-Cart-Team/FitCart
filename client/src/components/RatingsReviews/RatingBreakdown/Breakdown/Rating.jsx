import React from 'react';

const Rating = props => {
  let barVal = props.quantity / props.total;

  return (
    <div className="ratings-breakdown" style={{ '--ratingval': barVal }}>
      <span style={{ width: '10%' }}>{props.rating} stars:</span>
      {/* {barVal}, {props.quantity} */}
      <div className="ratings-bar"></div>
    </div>
  );
};

export default Rating;
