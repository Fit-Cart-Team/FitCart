import React from 'react';
import { useParams } from 'react-router-dom';

const RatingsReviews = () => {
  const { id } = useParams();
  return <div>From Ratings & Reviews: {id}</div>;
};

export default RatingsReviews;