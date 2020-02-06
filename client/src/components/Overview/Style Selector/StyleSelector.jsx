import React from 'react';

import Style from './Style';

const StyleSelector = ({ styleInfo, setSelectedStyle }) => {
  const styles = styleInfo.map((style, index) => (
    <Style
      key={style.style_id}
      style={style}
      setSelectedStyle={setSelectedStyle}
      index={index}
    />
  ));
  return <div className="style-list">{styles}</div>;
};

export default StyleSelector;
