import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  let temp = photos[0] ? photos[0].url : '';
  const [slideIndex, setslideIndex] = useState(1);

  // useEffect(() => {
  //   showSlide(1);
  // }, [slideIndex]);

  const photoSlides = photos.map(photo => {
    return (
      <div key={photo.url} className="image-slides">
        <img src={photo.url} />
      </div>
    );
  });

  const setSlide = index => {
    setslideIndex(index);
  };
  const incrementSlide = dir => {
    setslideIndex(prev => prev + dir);
  };
  const showSlide = n => {
    var i;
    var slides = document.getElementsByClassName('image-slides');
    var dots = document.getElementsByClassName('demo');
    if (n > slides.length) {
      setslideIndex(1);
    }
    if (n < 1) {
      setslideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  return (
    <div className="image-gallery">
      <ImagePreviews photos={photos} />
      {/* {photoSlides} */}
      <div className="image-slides">
        <img src={temp} />
      </div>
      <a
        className="prev"
        onClick={() => {
          incrementSlide(-1);
        }}
      >
        {'<'}
      </a>
      <a
        className="next"
        onClick={() => {
          incrementSlide(1);
        }}
      >
        {'>'}
      </a>
    </div>
  );
};

export default ImageGallery;
