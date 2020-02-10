import React from 'react';

const AnswerPhotos = ({ photos }) => {
  let style = {
    margin: '20px',
    width: '5rem',
    height: '4rem',
  };

  return (
    <div>
      {photos.map(photo => {
        return (
          <span key={photo.id}>
            <img src={photo.url} style={style} id={photo.id}></img>
          </span>
        );
      })}
    </div>
  );
};

export default AnswerPhotos;
