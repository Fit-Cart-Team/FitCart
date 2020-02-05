import React from 'react';

const Style = ({ style, setSelectedStyle }) => {
  return (
    <div
      className="style-item"
      onClick={() => {
        setSelectedStyle(style.style_id);
      }}
    >
      {style.name}
    </div>
  );
};

export default Style;
