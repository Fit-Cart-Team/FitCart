import React from 'react';
import Rating from './Rating';

const Breakdown = (props) => {

  if (props.ratings) {
    let ratings = [5, 4, 3, 2, 1];

    return (
      <div>
        {ratings.map((rating, index) => {
          return (
            <Rating key={index} rating={rating} quantity={( props.ratings.hasOwnProperty(rating) ? props.ratings[rating] : 0 )} total={props.totalRatings} toggleFilterBy={props.toggleFilterBy} clearFilters={props.clearFilters} />
          );
        })}
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Breakdown;