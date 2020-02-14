import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const PhotoModal = (props) => {
  let style = {
    margin: "10px",
    width: "100px",
    height: "100px",
    "cursor": "pointer"
  };
  
  return (
    <Modal trigger={<img src={props.photo.url} style={style} alt="Loading..." ></img>} basic closeIcon >
      <Modal.Content image>
        <Image src={props.photo.url} size="big" verticalAlign="top" centered rounded />
      </Modal.Content>
    </Modal>
  );
}

export default PhotoModal;