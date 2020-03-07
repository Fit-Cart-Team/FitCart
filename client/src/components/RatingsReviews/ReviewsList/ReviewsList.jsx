import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile';
import MoreReviews from './MoreReviews/MoreReviews';
import ReviewModal from './AddReview/ReviewModal';

const ReviewsList = (props) => {
  const { reviewsList, filter, filterBy, characteristics, productName, productID, updateList, updateMeta, updateTotalRatings, setAppAvg, setAppTotal, sortParameter } = props;
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
        <div className="reviews-list" >
          {filteredList.slice(0, reviewsCount).map((review) => {
            return (
              <ReviewTile key={review.review_id} review={review} />
            );
          })}
        </div>
        <div className="reviews-list-buttons" >
          {(reviewsCount >= filteredList.length) ? <div></div> : (<MoreReviews incrementReviewsCount={incrementReviewsCount} />)}
          <ReviewModal characteristics={characteristics} productName={productName} productID={productID} updateList={updateList} updateMeta={updateMeta} updateTotalRatings={updateTotalRatings} setAppAvg={setAppAvg} setAppTotal={setAppTotal} sortParameter={sortParameter} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="reviews-list" >
        <ReviewModal characteristics={characteristics} productName={productName} productID={productID} updateList={updateList} updateMeta={updateMeta} updateTotalRatings={updateTotalRatings} setAppAvg={setAppAvg} setAppTotal={setAppTotal} sortParameter={sortParameter} />
      </div>
    );
  }
};

export default ReviewsList;