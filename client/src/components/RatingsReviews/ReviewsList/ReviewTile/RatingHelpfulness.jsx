import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const RatingHelpfulness = (props) => {
  let review_id = props.reviewID;

  const [markable, setMarkable] = useState(true);
  const [reportable, setReportable] = useState(true);
  const [helpfulness, setHelpfulness] = useState(props.helpfulness);

  const markHelpful = () => {
    Axios.put(`http://3.134.102.30/reviews/helpful/${review_id}`)
      .then((data) => {
        setMarkable(false);
        setHelpfulness(helpfulness + 1);
      })
  }

  const sendReport = () => {
    Axios.put(`http://3.134.102.30/reviews/report/${review_id}`)
      .then((data) => {
        setReportable(false);
      })
  }

  return (
    <div>
      <span>Was this review helpful? </span>
      { markable ? <span onClick={markHelpful} >Yes</span> : <span>Yes</span> }
      <span>({helpfulness}) | </span>   
      { reportable ? <span onClick={sendReport} >Report</span> : <span>Reported</span> }
    </div>
  );
};

export default RatingHelpfulness;