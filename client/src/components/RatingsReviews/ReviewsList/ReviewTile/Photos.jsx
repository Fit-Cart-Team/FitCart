import React from 'react';

const Photos = (props) => {
  let style = {
    margin: "10px",
    width: "100px",
    height: "100px"
  }

  return (
    <div>
      {props.photos.map((photo => {
        return (
          <span key={photo.id} >
            <img src={photo.url} style={style} ></img>
          </span>
        );
      }))}
    </div>
  );
}

export default Photos;