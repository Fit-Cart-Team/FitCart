import React from 'react';
import ReviewTile from './ReviewTile/ReviewTile';
import MoreReviews from './MoreReviews/MoreReviews';
import AddReview from './AddReview/AddReview';

const ReviewsList = (props) => {

  return (
    <div>
      {props.reviewsList.map((review) => {
        return (
          <ReviewTile key={review.review_id} review={review} />
        );
      })}
      <div style={{margin: "10px"}} >
        <MoreReviews />
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewsList;