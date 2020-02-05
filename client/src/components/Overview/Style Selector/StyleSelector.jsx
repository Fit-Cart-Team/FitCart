import React from 'react';

import Style from './Style';

const StyleSelector = ({ styleInfo, setSelectedStyle }) => {
  const styles = styleInfo.map(style => (
    <Style
      key={style.style_id}
      style={style}
      setSelectedStyle={setSelectedStyle}
    />
  ));
  return <div className="style-list">{styles}</div>;
};

export default StyleSelector;
