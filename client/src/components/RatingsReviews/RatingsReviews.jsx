import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewsList from './ReviewsList/ReviewsList';

//setAppAvg(value)
//setAppTotal(value)

// Meta Data:
//
// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     },
//     // ...
// }

const RatingsReviews = (props) => {
  const { id } = useParams();

  const [url, seturl] = useState(id);
  const [reviewsList, setReviewsList] = useState([]);
  const [meta, setMeta] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingAvg, setRatingAvg] = useState(0);

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${url}/meta`)
      .then(( {data} ) => {
        setMeta(data);
        return data;
      })
      .then((data) => {
        let totalQuantity = 0;
        let ratingSum = 0;

        for (let rating in data.ratings) {
          totalQuantity += data.ratings[rating];
          ratingSum += rating * data.ratings[rating];
        }

        setTotalRatings(totalQuantity);

        let ratingAvg = ratingSum / totalQuantity;
        setRatingAvg(ratingAvg);

        props.setAppAvg(ratingAvg);
        props.setAppTotal(totalQuantity);
      })
  }, [url]);

  // useEffect(() => {
  //   axios.get(`http://3.134.102.30/reviews/${url}/list`)
  //     .then(( {data} ) => {
  //       setReviewsList(data.results);
  //     })
  // }, [url]);

  return (
    <div id="ratings-reviews" >
      <h1>
        Ratings & Reviews
      </h1>
      {/* <ReviewsList id={id} reviewsList={reviewsList} /> */}
    </div>
  );
};

export default RatingsReviews;
