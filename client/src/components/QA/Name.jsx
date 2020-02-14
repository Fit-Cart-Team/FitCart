import React from 'react';

const Name = ({ unformattedName }) => {
  let name = unformattedName;
  if (name.indexOf('Seller') !== -1) {
    name = name.substring(0, name.indexOf('Seller'));
    return (
      <span className='answerer-name-seller'>
        {name}
        <b>Seller</b>
      </span>
    );
  } else {
    return <span className='answerer-name'>{name}</span>;
  }
};

export default Name;
