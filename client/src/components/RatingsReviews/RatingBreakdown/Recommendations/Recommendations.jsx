import React, { useState, useEffect } from 'react';

const Recommendations = (props) => {
  const [recommended, setRecommended] = useState({})

  useEffect(() => {
    setRecommended(props.recommended)
  });
  // let yes = recommended["1"];
  // let no = recommended["0"];
  // let decimal = yes / (yes + no);

  return (
    <div>
      <h3>Recommendations Component {recommended[1]}</h3>
    </div>
  );
}

export default Recommendations;