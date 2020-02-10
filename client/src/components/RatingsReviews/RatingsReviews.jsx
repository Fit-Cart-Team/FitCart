import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewsList from './ReviewsList/ReviewsList';
import SortOptions from './SortOptions/SortOptions';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown';

//setAppAvg(value)
//setAppTotal(value)

// Meta Data:
//
// {
//   "product_id": "1",
//   "ratings": {
//       "1": 15,
//       "2": 2,
//       "3": 9,
//       "4": 12,
//       "5": 19
//   },
//   "recommended": {
//       "0": 23,
//       "1": 34
//   },
//   "characteristics": {
//       "Fit": {
//           "id": 1,
//           "value": "2.8158"
//       },
//       "Length": {
//           "id": 2,
//           "value": "2.8462"
//       },
//       "Comfort": {
//           "id": 3,
//           "value": "2.7949"
//       },
//       "Quality": {
//           "id": 4,
//           "value": "2.9231"
//       }
//   }
// }

const RatingsReviews = (props) => {
  const { id } = useParams();

  const [url, seturl] = useState(id);
  const [reviewsList, setReviewsList] = useState([]);
  const [meta, setMeta] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingAvg, setRatingAvg] = useState(0);
  const [sortParameter, setSortParameter] = useState('relevant');

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${url}/meta`)
      .then(( {data} ) => {
        setMeta(data);
        
        let totalQuantity = 0;
        let ratingSum = 0;

        for (let rating in data.ratings) {
          totalQuantity += data.ratings[rating];
          ratingSum += rating * data.ratings[rating];
        }

        setTotalRatings(totalQuantity);
        
        let ratingAvg = ratingSum / totalQuantity;
        // setRatingAvg(ratingAvg);

        props.setAppAvg(ratingAvg);

        axios.get(`http://3.134.102.30/reviews/${url}/list?page=1&count=${totalQuantity}&sort=${sortParameter}`)
          .then(( {data} ) => {
            props.setAppTotal(data.results.length)
            setReviewsList(data.results);
          });
      });
  }, [url]);

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${url}/list?page=1&count=${props.totalReviews}&sort=${sortParameter}`)
      .then(( {data} ) => {
        setReviewsList(data.results);
      });
  }, [sortParameter]);

  const changeSortParameter = (parameter) => {
    if (parameter !== undefined || parameter !== null) {
      setSortParameter(parameter);
    }
  }

  return (
    <div id="ratings-reviews" >
      <h1>
        Ratings & Reviews
      </h1>
      <RatingBreakdown recommended={meta.recommended} ratings={meta.ratings} ratingAverage={props.ratingAverage} totalRatings={totalRatings} />
      <ProductBreakdown characteristics={meta.characteristics} />
      <SortOptions totalReviews={props.totalReviews} changeSortParameter={changeSortParameter} />
      <ReviewsList id={id} reviewsList={reviewsList} />
    </div>
  );
};

export default RatingsReviews;
