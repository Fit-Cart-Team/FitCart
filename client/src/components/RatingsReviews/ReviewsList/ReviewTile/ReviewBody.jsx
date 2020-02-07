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
        <p>
          {props.body}
        </p>
        { (props.photos.length) ? (<Photos photos={props.photos} />) : (<div></div>) }
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Body: { (!showMore) ? (`${props.body.slice(0, 250)}...`) : (`${props.body}`) }
        </p>
        <button onClick={toggleShowMore} >{ (!showMore) ? 'Show more' : 'Show less' }</button>
        { (props.photos.length) ? (<Photos photos={props.photos} />) : (<div></div>) }
      </div>
    )
  }

};

export default ReviewBody;