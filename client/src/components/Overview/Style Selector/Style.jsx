import React from 'react';

const Style = ({ style, setSelectedStyle, index, selectedStyle }) => {
  const defaultIMG =
    'https://avatars3.githubusercontent.com/u/12416599?s=460&v=4';
  const photoIMG = style.photos[0].thumbnail_url ? (
    <img
      className="style-selector-thumbnail-img"
      src={style.photos[0].thumbnail_url}
      alt="Style Thumbnail"
    ></img>
  ) : (
    <img
      className="style-selector-thumbnail-img"
      src={defaultIMG}
      alt="No Image"
    ></img>
  );

  const checked =
    selectedStyle.index === index ? (
      <div className="far fa-check-circle"></div>
    ) : (
      <div></div>
    );
  return (
    <div
      className="style-item"
      onClick={() => {
        setSelectedStyle({ index: index, name: style.name });
      }}
    >
      {checked}
      {photoIMG}
      <div className="style-tooltip">{style.name}</div>
    </div>
  );
};

export default Style;
