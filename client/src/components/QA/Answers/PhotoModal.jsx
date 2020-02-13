import React from 'react';
import { Image, Modal } from 'semantic-ui-react';

const PhotoModal = ({ photo }) => {
  let style = {
    margin: '10px',
    width: '5rem',
    height: '4rem'
  };
  let style2 = {
    height: '75vh'
  };
  return (
    <Modal
      trigger={
        <img src={photo.url} style={style} id={photo.id} alt="Photo"></img>
      }
      closeIcon="window close"
    >
      <Modal.Content image>
        <Image src={photo.url} style={style2} centered />
      </Modal.Content>
    </Modal>
  );
};

export default PhotoModal;
