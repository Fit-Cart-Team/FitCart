import React from 'react';
import { Divider, Header, Image, Modal } from 'semantic-ui-react';

const PhotoModal = ({ photo }) => {
  let style = {
    margin: '20px',
    width: '5rem',
    height: '4rem',
  };
  return (
    <Modal
      trigger={<img src={photo.url} style={style} id={photo.id}></img>}
      closeIcon='window close'
    >
      <Modal.Content image>
        <Image fluid src={photo.url} />
      </Modal.Content>
    </Modal>
  );
};

export default PhotoModal;
