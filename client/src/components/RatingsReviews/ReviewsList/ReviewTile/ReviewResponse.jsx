import React from 'react';

const ReviewResponse = (props) => {

  return (
    <div>
      <p>
        Response:
      </p>   
      <p>
        {props.response}
      </p>
    </div>
  );
};

export default ReviewResponse;