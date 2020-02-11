import React, { useEffect } from 'react';

const ImagePreviews = ({
  photos,
  setSlide,
  currSlide,
  shownThumbnails,
  setshownThumbnails,
  url,
  selectedStyle,
  size
}) => {
  const defaultIMG =
    'https://avatars0.githubusercontent.com/u/5233442?s=400&v=4';
  const photoThumbnails = photos.map((photo, index) => {
    const classes =
      currSlide === index
        ? 'thumbnail-preview active-img'
        : 'thumbnail-preview';
    return (
      <div key={photo.url} className="thumbnail-container">
        <img
          key={photo.url}
          className={classes}
          src={photo.thumbnail_url || defaultIMG}
          onClick={() => {
            setSlide(index);
          }}
          style={
            size === 'small'
              ? {
                  maxWidth: '2.5vw',
                  minWidth: '2.5vw',
                  maxHeight: '2.5vw',
                  minHeight: '2.5vw'
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
      if (shownThumbnails <= photoThumbnails.length - 8) {
        setshownThumbnails(prev => prev + 1);
      }
    }
  };

  const upStyles = shownThumbnails > 0 ? {} : { opacity: '0' };
  const downStyles =
    shownThumbnails < photoThumbnails.length - 7 ? {} : { opacity: '0' };

  useEffect(() => {
    setshownThumbnails(0);
  }, [url, selectedStyle]);

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
          {/* {'⮝'} */}
          &#11165;
        </div>

        {photoThumbnails.slice(shownThumbnails, shownThumbnails + 7)}
        <div
          className="down"
          onClick={() => {
            toggleShownThumbnails(1);
          }}
          style={downStyles}
        >
          {/* {'⮟'} */}
          &#11167;
        </div>
      </div>
    );
  } else {
    return <div className="thumbnail-column">{photoThumbnails}</div>;
  }
};

export default ImagePreviews;
