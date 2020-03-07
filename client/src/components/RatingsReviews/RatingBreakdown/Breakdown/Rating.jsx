import React from 'react';

const Rating = props => {
  let barVal = props.quantity / props.total;

  return (
    <div className="ratings-breakdown" style={{ '--ratingval': barVal , "alignSelf": "flex-start"}}>
      <div className="ratings-bar"></div>
    </div>
  );
};

export default Rating;
