import React, { useContext } from 'react';

import ImageCarousel from './ImageCarousel';
import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle }) => {
  let currStyle = styleInfo[selectedStyle];
  let photos = currStyle ? currStyle.photos : [];
  return (
    <div className="image-gallery">
      <ImageCarousel photos={photos} />
      <ImagePreviews photos={photos} />
    </div>
  );
};

export default ImageGallery;
