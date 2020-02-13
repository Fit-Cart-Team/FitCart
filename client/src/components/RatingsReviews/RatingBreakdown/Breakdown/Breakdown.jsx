import React from 'react';
import Rating from './Rating';

const Breakdown = (props) => {

  const style = { 
    width: '10%', 
    "textDecoration": "underline", 
    "cursor": "pointer" 
  }

  const handleClick = (e) => {
    props.toggleFilterBy(parseInt(e.target.innerText.split(' ')[0]));
  }

  if (props.ratings) {
    let ratings = [5, 4, 3, 2, 1];

    return (
      <div>
        <div className="ratings-breakdown-labels-container" >
          {ratings.map((rating) => {
            return (
              <p style={style} onClick={handleClick} >{rating} stars ({( props.ratings.hasOwnProperty(rating) ? props.ratings[rating] : 0 )}):</p>
            )
          })}
        </div>
        <div className="ratings-breakdown-bars-container" >
          {ratings.map((rating, index) => {
            return (
              <Rating key={index} rating={rating} quantity={( props.ratings.hasOwnProperty(rating) ? props.ratings[rating] : 0 )} total={props.totalRatings} clearFilters={props.clearFilters} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Breakdown;