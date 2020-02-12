import React from 'react';
import Characteristic from './Characteristic';

const ProductBreakdown = (props) => {

  if (props.characteristics) {
    let characteristicNames = Object.keys(props.characteristics);

    return (
      <div className="product-breakdown" >
        <h2>Product Breakdown Component</h2>
        {characteristicNames.map((characteristicName) => {
          return (
            <Characteristic key={props.characteristics[characteristicName].id} name={characteristicName} rating={props.characteristics[characteristicName].value} />
          );
        })}
        <br/>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default ProductBreakdown;