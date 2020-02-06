import React from 'react';
import ReviewTile from './ReviewTile/ReviewTile';

const ReviewsList = (props) => {

  return (
    <div>
      <h1>
        Reviews List Component
      </h1>
      {props.reviewsList.map((review) => {
        return (
          <div key={review.review_id} >
            <ReviewTile review={review} />
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;