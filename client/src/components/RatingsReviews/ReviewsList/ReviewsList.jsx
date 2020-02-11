import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile';
import MoreReviews from './MoreReviews/MoreReviews';
import AddReview from './AddReview/AddReview';
import ReviewModal from './AddReview/ReviewModal';

const ReviewsList = (props) => {
  const { reviewsList, filter, filterBy } = props;
  const [reviewsCount, setReviewsCount] = useState(2);

  let filteredList = reviewsList.filter((review) => {
    if (filter) {
      for (let rating in filterBy) {
        if (review.rating === parseInt(rating)) {
          return filterBy[rating];
        }
      }
      return false;
    } else {
      return true;
    }
  });

  const incrementReviewsCount = () => {
    if (reviewsCount + 2 >= filteredList.length) {
      setReviewsCount(filteredList.length);
    } else {
      setReviewsCount(reviewsCount + 2);
    }
  }
  
  if (filteredList.length > 0) {
    return (
      <div>
        {filteredList.slice(0, reviewsCount).map((review) => {
          return (
            <ReviewTile key={review.review_id} review={review} />
          );
        })}
        <div style={{margin: "10px"}} >
          {(reviewsCount === filteredList.length) ? <div></div> : (<MoreReviews incrementReviewsCount={incrementReviewsCount} />)}
          <ReviewModal />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ReviewModal />
      </div>
    );
  }
};

export default ReviewsList;