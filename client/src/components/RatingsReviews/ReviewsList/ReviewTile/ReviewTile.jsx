import React from 'react';
import StarRating from './StarRating';
import ReviewSummary from './ReviewSummary';
import ReviewBody from './ReviewBody';
import Recommend from './Recommend';
import ReviewResponse from './ReviewResponse';
import RatingHelpfulness from './RatingHelpfulness';
import ReviewDate from './ReviewDate';
import ReviewerName from './ReviewerName';

// review_id: 57340
// rating: 5
// summary: "good"
// recommend: 1
// response: null
// body: "they good!"
// date: "2019-12-04T00:00:00.000Z"
// reviewer_name: "yaboi69"
// helpfulness: 43

const ReviewTile = (props) => {
  const { review } = props;

  return (
    <div>
      <h2>
        Review Tile Component
      </h2>
      <StarRating rating={review.rating} />
      <ReviewerName reviewerName={review.reviewer_name} />
      <ReviewDate date={review.date} />
      <ReviewSummary summary={review.summary} />
      <ReviewBody body={review.body} />
      <Recommend recommend={review.recommend} />
      {review.response ? <ReviewResponse response={review.response} /> : <div></div>}
      <RatingHelpfulness helpfulness={review.helpfulness} />
    </div>
  );
};

export default ReviewTile;