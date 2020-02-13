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
  const [filter, setFilter] = useState(false);
  const [filterBy, setFilterBy] = useState({ 5: false, 4: false, 3: false, 2: false, 1: false });

  // Returns false if any of the filterBy's are true
  const allFiltersAreFalse = (filters) => {
    let allAreFalse = true;
    
    for (let rating in filters) {
      if (filters[rating]) {
        allAreFalse = false;
      }
    }
    
    return allAreFalse;
  }
  
  // When a rating is clicked, toggle FilterBy
  const toggleFilterBy = (num) => {
    
    let tempFilters = {...filterBy, [num]: !filterBy[num]};
    
    setFilterBy({...filterBy, [num]: !filterBy[num]});

    // If any of the filterBy's are true, set the filter to false
    if (allFiltersAreFalse(tempFilters)) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  }

  // Sets all the filters to false
  const clearFilters = () => {
    setFilter(false);
    setFilterBy({ 5: false, 4: false, 3: false, 2: false, 1: false });
  }

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
        props.setAppTotal(data.results.length);
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
      <div>
        <h1 className="top-container" >
          Ratings & Reviews
        </h1>
      </div>
      <div className="bottom-container" >
        <div className="left-container" >
          <RatingBreakdown recommended={meta.recommended} ratings={meta.ratings} ratingAverage={props.ratingAverage} totalRatings={totalRatings} toggleFilterBy={toggleFilterBy} clearFilters={clearFilters} />
          <ProductBreakdown characteristics={meta.characteristics} />
        </div>
        <div className="right-container" >
          <SortOptions totalReviews={props.totalReviews} changeSortParameter={changeSortParameter} />
          <ReviewsList reviewsList={reviewsList} filter={filter} filterBy={filterBy} />
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;
