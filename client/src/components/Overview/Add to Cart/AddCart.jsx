import React from 'react';

import AddButton from './AddButton';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';

const AddCart = ({ id }) => {
  return (
    <div>
      <SizeSelector id={id} />
      <QuantitySelector id={id} />
      <AddButton />
    </div>
  );
};

export default AddCart;
