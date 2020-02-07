import React from 'react';

const StarRating = (props) => {
  const starVal = (Math.round(props.rating * 4) / 4).toFixed(2);
  return <div className="stars" style={{ '--rating': starVal }}></div>;

  return (
    <span>Star Rating: {props.rating}</span>
  );
};

export default StarRating;