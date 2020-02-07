import React from 'react';

const ImagePreviews = ({ photos, setSlide }) => {
  const photoThumbnails = photos.map((photo, index) => (
    <div key={photo.url} className="row">
      <img
        className="demo cursor"
        src={photo.thumbnail_url}
        onClick={() => {
          setSlide(index);
        }}
        alt="Loading"
      />
    </div>
  ));
  return <div className="column">{photoThumbnails}</div>;
};

export default ImagePreviews;
