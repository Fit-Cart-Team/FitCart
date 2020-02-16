import React, { useState } from 'react';

import AddButton from './AddButton';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';
import FavoriteButton from './FavoriteButton';

const AddCart = ({
  selectedStyle,
  styleInfo,
  productInfo,
  addProduct,
  removeProduct
}) => {
  let currStyle = styleInfo[selectedStyle.index];
  const [selectedSize, setSize] = useState(null);
  const [quant, setQuant] = useState(1);
  return (
    <React.Fragment>
      <div className="cart-options">
        <SizeSelector selectedStyle={currStyle} setSize={setSize} />
        <QuantitySelector
          selectedStyle={currStyle}
          selectedSize={selectedSize}
          setQuant={setQuant}
        />
      </div>
      <div className="cart-buttons">
        <AddButton />
        <FavoriteButton
          productInfo={productInfo}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      </div>
    </React.Fragment>
  );
};

export default AddCart;
