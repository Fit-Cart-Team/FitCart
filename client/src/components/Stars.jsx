import React from 'react';

const Stars = props => {
  const starVal = (Math.round(props.avg * 4) / 4).toFixed(2);
  return <div className="stars" style={{ '--rating': starVal }}></div>;
};

export default Stars;
