import React from 'react';

const Rating = props => {
  let barVal = props.quantity / props.total;

  const handleClick = (e) => {
    props.toggleFilterBy(parseInt(e.target.innerText.split(' ')[0]));
  }

  return (
    <div className="ratings-breakdown" style={{ '--ratingval': barVal }}>
      <span style={{ width: '10%' }} onClick={handleClick} >{props.rating} stars (props.quantity):</span>
      {/* {barVal}, {props.quantity} */}
      <div className="ratings-bar"></div>
    </div>
  );
};

export default Rating;
