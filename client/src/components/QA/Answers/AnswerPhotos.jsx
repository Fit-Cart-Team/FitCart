import React from 'react';
import PhotoModal from './PhotoModal';

const AnswerPhotos = ({ photos }) => {
  return (
    <div>
      {photos.map(photo => {
        return (
          <span key={photo.id}>
            <PhotoModal photo={photo} />
          </span>
        );
      })}
    </div>
  );
};

export default AnswerPhotos;
