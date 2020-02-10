import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile';
import MoreReviews from './MoreReviews/MoreReviews';
import AddReview from './AddReview/AddReview';

const ReviewsList = (props) => {
  const [reviewsCount, setReviewsCount] = useState(2);

  const incrementReviewsCount = () => {
    if (reviewsCount + 2 >= props.reviewsList.length) {
      setReviewsCount(props.reviewsList.length);
    } else {
      setReviewsCount(reviewsCount + 2);
    }
  }
  
  if (props.reviewsList.length > 0) {
    return (
      <div>
        {props.reviewsList.slice(0, reviewsCount).map((review) => {
          return (
            <ReviewTile key={review.review_id} review={review} />
          );
        })}
        <div style={{margin: "10px"}} >
          {(reviewsCount === props.reviewsList.length) ? <div></div> : (<MoreReviews incrementReviewsCount={incrementReviewsCount} />)}
          <AddReview />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <AddReview />
      </div>
    );
  }
};

export default ReviewsList;