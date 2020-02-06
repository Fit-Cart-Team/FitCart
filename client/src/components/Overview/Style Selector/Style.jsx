import React from 'react';

const Style = ({ style, setSelectedStyle, index }) => {
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
  return (
    <div
      className="style-item"
      onClick={() => {
        setSelectedStyle({ index: index, name: style.name });
      }}
    >
      {photoIMG}
      <span class="style-tooltip">{style.name}</span>
    </div>
  );
};

export default Style;
