import React from 'react';

import AddButton from './AddButton';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';

const AddCart = ({ selectedStyle, styleInfo }) => {
  let currStyle = styleInfo[selectedStyle];

  return (
    <div className="cart-options">
      <SizeSelector selectedStyle={currStyle} />
      <QuantitySelector selectedStyle={currStyle} />
      <AddButton />
    </div>
  );
};

export default AddCart;
