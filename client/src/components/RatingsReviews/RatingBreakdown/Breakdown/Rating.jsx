import React from 'react';

const Rating = (props) => {
  let barVal = props.quantity / props.total

  const handleClick = (e) => {
    props.toggleFilterBy(parseInt(e.target.innerText.split(' ')[0]));
  }

  return (
    <div>
      <h4 onClick={handleClick} >{props.rating} stars: {barVal}, {props.quantity}</h4>
    </div>
  );
}

export default Rating;