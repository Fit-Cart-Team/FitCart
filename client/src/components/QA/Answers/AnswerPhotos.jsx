import React from 'react';
import PhotoModal from './PhotoModal';

const AnswerPhotos = ({ photos }) => {
  return (
    <span>
      <br />
      {photos.map(photo => {
        return (
          <span key={photo.id} className='answer-photo-modal'>
            <PhotoModal
              photo={photo}
              className='answer-photo-modal-thumbnail'
            />
          </span>
        );
      })}
    </span>
  );
};

export default AnswerPhotos;
