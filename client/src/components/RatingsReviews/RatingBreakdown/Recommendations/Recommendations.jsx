import React from 'react';

const Recommendations = (props) => {
  
  if (props.recommended) {
    let yes = props.recommended["1"];
    let no = props.recommended["0"];
    let decimal = yes / (yes + no);
    let percentage = Math.round(decimal * 100).toFixed(0);

    return (
      <div>
        <h3>{percentage}% of reviews recommend this product</h3>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Recommendations;