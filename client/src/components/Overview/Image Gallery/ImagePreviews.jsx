import React from 'react';

const ImagePreviews = ({ photos, setSlide, currSlide }) => {
  const photoThumbnails = photos.map((photo, index) => {
    const classes =
      currSlide === index ? 'demo cursor active-img' : 'demo cursor';
    return (
      <div key={photo.url} className="row">
        <img
          className={classes}
          src={photo.thumbnail_url}
          onClick={() => {
            console.log(index);
            setSlide(index);
          }}
          alt="Loading"
        />
      </div>
    );
  });
  return <div className="column">{photoThumbnails}</div>;
};

export default ImagePreviews;
