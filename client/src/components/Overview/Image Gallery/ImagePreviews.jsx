import React, { useState } from 'react';

const ImagePreviews = ({
  photos,
  setSlide,
  currSlide,
  shownThumbnails,
  setshownThumbnails
}) => {
  const defaultIMG = 'https://img.moglimg.com/p/I/P/N/d/MINIPN3LI0NZS.jpg';
  const photoThumbnails = photos.map((photo, index) => {
    const classes =
      currSlide === index
        ? 'thumbnail-preview active-img'
        : 'thumbnail-preview';
    return (
      <div key={photo.url} className="row">
        <img
          className={classes}
          src={photo.thumbnail_url || defaultIMG}
          onClick={() => {
            setSlide(index);
          }}
          alt="Loading"
        />
        {currSlide === index ? <div className="active-bar"></div> : <div></div>}
      </div>
    );
  });

  const toggleShownThumbnails = dir => {
    if (dir === -1) {
      if (shownThumbnails > 0) {
        setshownThumbnails(prev => prev - 1);
      }
    } else {
      if (shownThumbnails < photoThumbnails.length - 8) {
        setshownThumbnails(prev => prev + 1);
      }
    }
  };

  if (photoThumbnails.length > 7) {
    return (
      <div className="thumbnail-column">
        {shownThumbnails > 0 ? (
          <div
            className="up"
            onClick={() => {
              toggleShownThumbnails(-1);
            }}
          >
            {'▲'}
          </div>
        ) : (
          <div className="up" style={{ color: 'black' }}>
            {'▲'}
          </div>
        )}
        {photoThumbnails.slice(shownThumbnails, shownThumbnails + 7)}
        {shownThumbnails < photoThumbnails.length - 8 ? (
          <div
            className="down"
            onClick={() => {
              toggleShownThumbnails(1);
            }}
          >
            {'▼'}
          </div>
        ) : (
          <div className="up" style={{ color: 'black' }}>
            {'▼'}
          </div>
        )}
      </div>
    );
  } else {
    return <div className="thumbnail-column">{photoThumbnails}</div>;
  }
};

export default ImagePreviews;
