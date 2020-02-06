import React from 'react';

const Style = ({ style, setSelectedStyle, index }) => {
  return (
    <div
      className="style-item"
      onClick={() => {
        setSelectedStyle({ index: index, name: style.name });
      }}
    >
      {style.name}
    </div>
  );
};

export default Style;
