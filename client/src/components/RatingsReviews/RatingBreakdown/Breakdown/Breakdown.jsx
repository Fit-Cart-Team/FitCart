import React from 'react';
import Rating from './Rating';

const Breakdown = (props) => {

  if (props.ratings) {
    let ratings = Object.keys(props.ratings).reverse();

    return (
      <div>
        {ratings.map((rating) => {
          return (
            <Rating rating={rating} quantity={props.ratings[rating]} total={props.totalRatings} />
          );
        })}
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Breakdown;