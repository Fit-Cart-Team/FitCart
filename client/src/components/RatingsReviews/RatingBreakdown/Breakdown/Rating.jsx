import React from 'react';

const Rating = props => {
  let barVal = props.quantity / props.total;

  const handleClick = (e) => {
    props.toggleFilterBy(parseInt(e.target.innerText.split(' ')[0]));
  }

  return (
    <div className="ratings-breakdown" style={{ '--ratingval': barVal , "alignSelf": "flex-start"}}>
      <div className="ratings-bar"></div>
    </div>
  );
};

export default Rating;
