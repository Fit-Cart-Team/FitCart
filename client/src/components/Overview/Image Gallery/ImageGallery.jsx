import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle, url }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  const [currSlide, setSlideIndex] = useState(0);
  const [view, setview] = useState('default');
  const [shownThumbnails, setshownThumbnails] = useState(0);

  const defaultIMG = 'https://homestaymatch.com/images/no-image-available.png';

  const photoSlides = photos.map(photo => {
    return photo.url;
  });
  const [imgStyles, setimgStyles] = useState({
    backgroundSize: 'contain',
    position: 'relative',
    width: '70%',
    cursor: 'zoom-in'
  });

  useEffect(() => {
    setSlide(0);
    setview('default');
    let defaultStyle = photoSlides[currSlide]
      ? {
          backgroundSize: 'contain',
          position: 'relative',
          width: '70%',
          cursor: 'zoom-in'
        }
      : {
          backgroundSize: 'contain',
          position: 'relative',
          width: '70%'
        };
    setimgStyles(defaultStyle);
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
      e.target.className.includes('image-gallery') &&
      photoSlides[currSlide]
    ) {
      if (view === 'default') {
        setimgStyles({
          backgroundSize: 'contain',
          position: 'absolute',
          width: '100%',
          cursor: 'crosshair'
        });
        setview('expanded');
      }
      if (view === 'expanded') {
        setimgStyles({
          backgroundSize: '250% 250%',
          position: 'absolute',
          width: '100%',
          cursor: 'zoom-out'
        });
        setview('zoom');
      }
      if (view === 'zoom') {
        setimgStyles({
          backgroundSize: 'contain',
          position: 'absolute',
          width: '100%',
          cursor: 'crosshair'
        });
        setview('expanded');
      }
    }
  };

  const handleZoom = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    // const x = -((e.pageX - left) / width) * 100;
    const x = e.pageX - left;
    const y = ((e.pageY - top) / height) * 100;
    console.log(x, y);
    setimgStyles(prev => {
      return { ...prev, backgroundPosition: `${-x * 1.5}px ${y}%` };
    });
  };

  const compressIcon =
    view === 'expanded' ? (
      <i
        className="shrink-zoom fa fa-expand"
        onClick={() => {
          setimgStyles({
            backgroundSize: 'contain',
            position: 'relative',
            width: '70%',
            cursor: 'zoom-in'
          });
          setview('default');
        }}
      ></i>
    ) : (
      <></>
    );

  return (
    <div
      className={view === 'default' ? 'image-gallery' : 'image-gallery ' + view}
      style={{
        ...imgStyles,
        backgroundImage: `url(${photoSlides[currSlide] || defaultIMG})`
      }}
      onClick={expandView}
      onMouseMove={e => {
        if (view === 'zoom') {
          handleZoom(e);
        }
      }}
    >
      {compressIcon}
      {view === 'default' ? (
        <ImagePreviews
          photos={photos}
          setSlide={setSlide}
          currSlide={currSlide}
          shownThumbnails={shownThumbnails}
          setshownThumbnails={setshownThumbnails}
          url={url}
          selectedStyle={selectedStyle}
        />
      ) : view === 'expanded' ? (
        <ImagePreviews
          photos={photos}
          setSlide={setSlide}
          currSlide={currSlide}
          shownThumbnails={shownThumbnails}
          setshownThumbnails={setshownThumbnails}
          url={url}
          selectedStyle={selectedStyle}
          size="small"
        />
      ) : (
        <></>
      )}
      {view !== 'zoom' ? (
        <>
          {currSlide > 0 ? (
            <a
              className="carousel-prev"
              onClick={() => {
                incrementSlide(-1);
              }}
            >
              {/* &#9668; */}
              🡨
            </a>
          ) : (
            <div></div>
          )}
          {currSlide < photos.length - 1 ? (
            <a
              className="carousel-next"
              onClick={() => {
                incrementSlide(1);
              }}
            >
              {/* &#9658; */}
              🡪
            </a>
          ) : (
            <div></div>
          )}{' '}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageGallery;
