import React from 'react';

import Style from './Style';

const StyleSelector = ({ styleInfo, setSelectedStyle, selectedStyle }) => {
  const styles = styleInfo.map((style, index) => (
    <Style
      key={style.style_id}
      style={style}
      setSelectedStyle={setSelectedStyle}
      selectedStyle={selectedStyle}
      index={index}
    />
  ));
  return (
    <div className="style-list">
      <div className="style-container">{styles}</div>
      {/* {styles} */}
    </div>
  );
};

export default StyleSelector;
