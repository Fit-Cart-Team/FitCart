import React from 'react';
import Characteristic from './Characteristic';

const ProductBreakdown = props => {
  if (props.characteristics) {
    let characteristicNames = Object.keys(props.characteristics);

    return (
      <div className="product-breakdown">
        {characteristicNames.map(characteristicName => {
          return (
            <Characteristic
              key={props.characteristics[characteristicName].id}
              name={characteristicName}
              rating={props.characteristics[characteristicName].value}
            />
          );
        })}
        <br />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ProductBreakdown;
