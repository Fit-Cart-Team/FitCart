import React, { useState, useEffect } from 'react';

import ImagePreviews from './ImagePreviews';

const ImageGallery = ({ styleInfo, selectedStyle, url }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let photos = currStyle ? currStyle.photos : [];
  const [currSlide, setSlideIndex] = useState(0);
  const [view, setview] = useState('default');
  const [shownThumbnails, setshownThumbnails] = useState(0);

  const defaultIMG = 'https://img.moglimg.com/p/I/P/N/d/MINIPN3LI0NZS.jpg';

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
    setimgStyles({
      backgroundSize: 'contain',
      position: 'relative',
      width: '70%',
      cursor: 'zoom-in'
    });
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
    if (e.target.className.includes('image-gallery')) {
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
          cursor:
            'url(https://cdn2.iconfinder.com/data/icons/metroicons/48/minus.png), pointer'
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
      return { ...prev, backgroundPosition: `${-x}px ${y}%` };
    });
  };

  const compressIcon =
    view === 'expanded' ? (
      <i
        className="fa fa-expand"
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
              className="prev"
              onClick={() => {
                incrementSlide(-1);
              }}
            >
              {/* {'🡠'} */}
              &#129120;
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
              {/* {'🡢'} */}
              &#129122;
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
