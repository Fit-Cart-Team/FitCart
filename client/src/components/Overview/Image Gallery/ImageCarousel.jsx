import React from 'react';

const ImageCarousel = ({ photos }) => {
  let firstPhoto = photos[0] ? photos[0].url : '';
  return <img src={firstPhoto} alt="oops"></img>;
  return (
    <div>
      <div></div>
    </div>
  );
};

export default ImageCarousel;
