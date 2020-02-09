import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle, url }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  let temp = photos[0] ? photos[0].url : '';
  const [currSlide, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlide(0);
  }, [url, selectedStyle]);

  const photoSlides = photos.map(photo => {
    return photo.url;
  });

  const setSlide = index => {
    setSlideIndex(index);
  };
  const incrementSlide = dir => {
    if (dir === -1) {
      if (currSlide > 0) {
        setSlideIndex(prev => prev + dir);
      }
    } else {
      if (currSlide < photos.length - 1) {
        setSlideIndex(prev => prev + dir);
      }
    }
  };
  // const showSlide = n => {
  //   var i;
  //   var slides = document.getElementsByClassName('image-slides');
  //   var dots = document.getElementsByClassName('demo');
  //   if (n > slides.length) {
  //     setslideIndex(1);
  //   }
  //   if (n < 1) {
  //     setslideIndex(slides.length);
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = 'none';
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(' active', '');
  //   }
  //   slides[slideIndex - 1].style.display = 'block';
  //   dots[slideIndex - 1].className += ' active';
  // };

  return (
    <div className="image-gallery">
      <ImagePreviews
        photos={photos}
        setSlide={setSlide}
        currSlide={currSlide}
      />
      {/* {photoSlides} */}
      <div className="image-slides">
        <img src={photoSlides[currSlide]} />
      </div>
      {currSlide > 0 ? (
        <a
          className="prev"
          onClick={() => {
            incrementSlide(-1);
          }}
        >
          {'←'}
        </a>
      ) : (
        <div></div>
      )}
      {currSlide < photos.length - 1 ? (
        <a
          className="next"
          onClick={() => {
            incrementSlide(1);
          }}
        >
          {'→'}
        </a>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ImageGallery;
