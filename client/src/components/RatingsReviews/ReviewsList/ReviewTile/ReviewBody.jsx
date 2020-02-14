import React, { useState, useEffect } from 'react';
import Photos from './Photos';

const ReviewBody = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }

  if (props.body.length < 250) {
    return (
      <div>
        <div className="review-body">
          {props.body}
        </div>
        <div className="review-body-photos" >
          { (props.photos.length) ? (<Photos photos={props.photos} />) : (<div></div>) }
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="review-body-sliced">
          { (!showMore) ? (`${props.body.slice(0, 250)}...`) : (`${props.body}`) }
        </div>
        <div className="review-body-show-more" >
          <div onClick={toggleShowMore} >{ (!showMore) ? 'Show more' : 'Show less' }</div>
        </div>
        <div className="review-body-photos" >
          { (props.photos.length) ? (<Photos photos={props.photos} />) : (<div></div>) }
        </div>
      </div>
    )
  }

};

export default ReviewBody;