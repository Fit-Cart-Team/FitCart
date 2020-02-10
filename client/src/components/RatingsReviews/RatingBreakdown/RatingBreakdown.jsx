import React from 'react';
import RatingSummary from './Summary/RatingSummary';
import Recommendations from './Recommendations/Recommendations';
import Breakdown from './Breakdown/Breakdown';

const RatingBreakdown = (props) => {

  return (
    <div>
      <h2>Rating Breakdown Component</h2>
      <RatingSummary ratingAverage={props.ratingAverage} />
      <Recommendations recommended={props.recommended} />
      <Breakdown ratings={props.ratings} totalRatings={props.totalRatings} toggleFilterBy={props.toggleFilterBy} clearFilters={props.clearFilters} />
    </div>
  );
}

export default RatingBreakdown;