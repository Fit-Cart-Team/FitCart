import React from 'react';

const QuantitySelector = ({ selectedStyle, selectedSize, setQuant }) => {
  let displayOptions;
  if (selectedSize) {
    let quant = selectedStyle['skus'][selectedSize];
    let maxQuant = quant > 15 ? 15 : quant;
    let numArr = Array.from({ length: maxQuant }, (v, k) => k + 1);
    displayOptions = numArr.map(num => (
      <option key={num} value={num}>
        {num}
      </option>
    ));
  } else {
    displayOptions = <option value="-">---</option>;
  }

  return (
    <select
      className="quantity-selector"
      onChange={e => {
        setQuant(e.target.value);
      }}
    >
      {displayOptions}
    </select>
  );
};

export default QuantitySelector;
