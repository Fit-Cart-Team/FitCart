import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewsList from './ReviewsList/ReviewsList';

const RatingsReviews = () => {
  const { id } = useParams();

  const [url, seturl] = useState(id);
  const [reviewsList, setReviewsList] = useState([]);

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${url}/list`)
      .then(( {data} ) => {
        setReviewsList(data.results);
      })
  }, [url]);

  return (
    <div id="ratings-reviews" >
      <h1>
        From Ratings & Reviews: {id}
      </h1>
      <ReviewsList id={id} reviewsList={reviewsList} />
    </div>
  );
};

export default RatingsReviews;