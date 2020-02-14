import React from 'react';

const ReviewSummary = (props) => {

  return (
    <div className="review-tile-summary" >
      <h3>
        {(props.summary.length > 60) ? (`${props.summary.slice(0, 60)}...`) : (`${props.summary}`)}
      </h3>   
    </div>
  );
};

export default ReviewSummary;