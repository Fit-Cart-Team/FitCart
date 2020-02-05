import React, { useState } from 'react';

import AddButton from './AddButton';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';

const AddCart = ({ selectedStyle, styleInfo }) => {
  let currStyle = styleInfo[selectedStyle];
  const [selectedSize, setSize] = useState(null);
  const [quant, setQuant] = useState(1);
  return (
    <div className="cart-options">
      <p>Size: {selectedSize}</p>
      <p>Quantity: {quant}</p>
      <SizeSelector selectedStyle={currStyle} setSize={setSize} />
      <QuantitySelector
        selectedStyle={currStyle}
        selectedSize={selectedSize}
        setQuant={setQuant}
      />
      <AddButton />
    </div>
  );
};

export default AddCart;
