import React from 'react';
import { Button } from 'semantic-ui-react';

const MoreReviews = (props) => {

  return (
    <span style={{margin: "5px"}} onClick={props.incrementReviewsCount} >
      <Button>More Reviews</Button>
      {/* <button onClick={props.incrementReviewsCount} >More Reviews</button> */}
    </span>
  );
}

export default MoreReviews;