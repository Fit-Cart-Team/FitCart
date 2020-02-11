import React from 'react';
import PhotoModal from './PhotoModal';

const Photos = (props) => {

  return (
    <div>
      {props.photos.map((photo => {
        return (
          <span key={photo.id} >
            <PhotoModal photo={photo} />
          </span>
        );
      }))}
    </div>
  );
}

export default Photos;