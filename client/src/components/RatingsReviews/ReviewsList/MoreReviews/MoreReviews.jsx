import React from 'react';

const MoreReviews = (props) => {

  return (
    <span style={{margin: "5px"}} >
      <button onClick={props.incrementReviewsCount} >More Reviews</button>
    </span>
  );
}

export default MoreReviews;