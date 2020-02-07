import React from 'react';
import Axios from 'axios';

const RatingHelpfulness = (props) => {
  let review_id = props.reviewID;

  const markHelpful = () => {
    Axios.put(`http://3.134.102.30/reviews/helpful/${review_id}`)
      .then((data) => {
        console.log(data);
      })
  }

  const sendReport = () => {
    Axios.put(`http://3.134.102.30/reviews/report/${review_id}`)
      .then((data) => {
        console.log(data);
      })
  }

  return (
    <div>
      <span>Was this review helpful? </span>
      <span onClick={markHelpful} >Yes</span>
      <span>({props.helpfulness}) | </span>   
      <span onClick={sendReport} >Report</span>
    </div>
  );
};

export default RatingHelpfulness;