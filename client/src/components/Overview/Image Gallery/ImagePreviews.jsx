import React from 'react';

const ImagePreviews = ({ photos, setSlide, currSlide }) => {
  const photoThumbnails = photos.map((photo, index) => {
    const classes =
      currSlide === index
        ? 'thumbnail-preview active-img'
        : 'thumbnail-preview';
    return (
      <div key={photo.url} className="row">
        <img
          className={classes}
          src={photo.thumbnail_url}
          onClick={() => {
            setSlide(index);
          }}
          alt="Loading"
        />
        {currSlide === index ? <div className="active-bar"></div> : <div></div>}
      </div>
    );
  });
  return <div className="column">{photoThumbnails}</div>;
};

export default ImagePreviews;
