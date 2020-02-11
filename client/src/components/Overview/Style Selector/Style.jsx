import React from 'react';

const Style = ({ style, setSelectedStyle, index, selectedStyle }) => {
  const defaultIMG =
    'https://avatars0.githubusercontent.com/u/5233442?s=400&v=4';
  const photoIMG = style.photos[0].thumbnail_url ? (
    <img
      className="thumbnail-img"
      src={style.photos[0].thumbnail_url}
      alt="loading"
    ></img>
  ) : (
    <img className="thumbnail-img" src={defaultIMG} alt="no image"></img>
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
