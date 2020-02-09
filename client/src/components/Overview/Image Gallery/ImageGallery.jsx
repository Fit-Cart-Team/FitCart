import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle, url }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  const [currSlide, setSlideIndex] = useState(0);
  const [expanded, setexpanded] = useState(false);

  const photoSlides = photos.map(photo => {
    return photo.url;
  });
  const [imgStyles, setimgStyles] = useState({
    // backgroundImage: `url(${photoSlides[currSlide]})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    position: 'relative',
    width: '60%'
  });

  useEffect(() => {
    setSlide(0);
  }, [url, selectedStyle]);

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

  const expandView = e => {
    if (e.target.className === 'image-gallery') {
      if (!expanded) {
        setimgStyles({
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%'
        });
      } else {
        setimgStyles({
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          width: '60%'
        });
      }
      setexpanded(expanded => !expanded);
    }
  };

  return (
    <div
      className="image-gallery"
      style={imgStyles}
      onClick={e => {
        expandView(e);
      }}
    >
      <ImagePreviews
        photos={photos}
        setSlide={setSlide}
        currSlide={currSlide}
      />
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
