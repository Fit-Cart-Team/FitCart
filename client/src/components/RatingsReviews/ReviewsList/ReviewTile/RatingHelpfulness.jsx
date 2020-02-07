import React from 'react';

const RatingHelpfulness = (props) => {

  return (
    <div>
      <span>Was this review helpful? </span>
      <span>Yes</span>
      <span>({props.helpfulness}) | </span>   
      <span>Report</span>
    </div>
  );
};

export default RatingHelpfulness;