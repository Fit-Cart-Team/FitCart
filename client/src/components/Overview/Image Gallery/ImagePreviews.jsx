import React, { useState } from 'react';

const ImagePreviews = ({
  photos,
  setSlide,
  currSlide,
  shownThumbnails,
  setshownThumbnails,
  size
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
          style={
            size
              ? {
                  maxWidth: '2vw',
                  minWidth: '2vw',
                  maxHeight: '2vw',
                  minHeight: '2vw'
                }
              : {}
          }
          alt="Loading"
        />
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

  const upStyles = shownThumbnails > 0 ? {} : { color: 'black' };
  const downStyles =
    shownThumbnails < photoThumbnails.length - 8 ? {} : { color: 'black' };

  if (photoThumbnails.length > 7) {
    return (
      <div className="thumbnail-column">
        <div
          className="up"
          onClick={() => {
            toggleShownThumbnails(-1);
          }}
          style={upStyles}
        >
          {'▲'}
        </div>

        {photoThumbnails.slice(shownThumbnails, shownThumbnails + 7)}
        <div
          className="down"
          onClick={() => {
            toggleShownThumbnails(1);
          }}
          style={downStyles}
        >
          {'▼'}
        </div>
      </div>
    );
  } else {
    return <div className="thumbnail-column">{photoThumbnails}</div>;
  }
};

export default ImagePreviews;
