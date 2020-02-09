import React from 'react';
import RatingSummary from './Summary/RatingSummary';
import Recommendations from './Recommendations/Recommendations';
import Breakdown from './Breakdown/Breakdown';

const RatingBreakdown = (props) => {

  return (
    <div>
      <h2>Rating Breakdown Component {bobs}</h2>
      <RatingSummary ratingAverage={props.ratingAverage} />
      <Recommendations recommended={props.recommended} />
      <Breakdown ratings={props.ratings} />
    </div>
  );
}

export default RatingBreakdown;