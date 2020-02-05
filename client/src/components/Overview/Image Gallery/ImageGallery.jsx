import React, { useContext } from 'react';

import ImageCarousel from './ImageCarousel';
import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ id }) => {
  return (
    <div>
      <ImageCarousel />
      <ImagePreviews />
    </div>
  );
};

export default ImageGallery;
