import React from 'react';

const Style = ({ style, setSelectedStyle, index, selectedStyle }) => {
  const defaultIMG = 'https://img.moglimg.com/p/I/P/N/d/MINIPN3LI0NZS.jpg';
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
    selectedStyle.name === style.name ? (
      <div className="fa fa-check-circle"></div>
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
