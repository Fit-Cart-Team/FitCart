import React from 'react';

const Recommendations = (props) => {
  
  if (props.recommended) {
    let yes = props.recommended["1"];
    let no = props.recommended["0"];
    let decimal = yes / (yes + no);
    let percentage = Math.round(decimal * 100);

    if (!props.recommended["1"]) {
      percentage = 0;
    }

    if (!props.recommended["0"]) {
      percentage = 100;
    }

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