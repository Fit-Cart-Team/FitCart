import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle, url }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  const [currSlide, setSlideIndex] = useState(0);
  const [expanded, setexpanded] = useState(false);
  const [shownThumbnails, setshownThumbnails] = useState(0);

  const defaultIMG = 'https://img.moglimg.com/p/I/P/N/d/MINIPN3LI0NZS.jpg';

  const photoSlides = photos.map(photo => {
    return photo.url;
  });
  const [imgStyles, setimgStyles] = useState({
    backgroundSize: 'contain',
    position: 'relative',
    width: '60%',
    cursor: 'zoom-in'
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
        if (currSlide - 1 < shownThumbnails) {
          setshownThumbnails(prev => prev - 1);
        }
        setSlideIndex(prev => prev + dir);
      }
    } else {
      if (currSlide < photos.length - 1) {
        if (currSlide + 1 > shownThumbnails + 6) {
          setshownThumbnails(prev => prev + 1);
        }
        setSlideIndex(prev => prev + dir);
      }
    }
  };

  const expandView = e => {
    if (
      e.target.className === 'image-gallery' ||
      e.target.className === 'image-gallery expanded'
    ) {
      if (!expanded) {
        setimgStyles({
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          cursor: 'zoom-out'
        });
      } else {
        setimgStyles({
          backgroundSize: 'contain',
          position: 'relative',
          width: '60%',
          cursor: 'zoom-in'
        });
      }
      setexpanded(expanded => !expanded);
    }
  };

  const handleZoom = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    console.log(x, y);
    setimgStyles(prev => {
      return { ...prev, backgroundPosition: `${x}% ${y}%` };
    });
  };

  return (
    <div
      className={expanded ? 'image-gallery expanded' : 'image-gallery'}
      style={{
        ...imgStyles,
        backgroundImage: `url(${photoSlides[currSlide] || defaultIMG})`
      }}
      onClick={expandView}
      onMouseMove={e => {
        if (expanded) {
          handleZoom(e);
        }
      }}
    >
      <ImagePreviews
        photos={photos}
        setSlide={setSlide}
        currSlide={currSlide}
        shownThumbnails={shownThumbnails}
        setshownThumbnails={setshownThumbnails}
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
