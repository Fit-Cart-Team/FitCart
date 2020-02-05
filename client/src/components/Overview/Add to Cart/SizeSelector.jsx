import React from 'react';

const SizeSelector = ({ selectedStyle, setSize }) => {
  const skus = selectedStyle ? selectedStyle.skus : {};
  const sizes = Object.keys(skus);
  const sizeOptions = sizes.map(size => {
    return skus[size] > 0 ? (
      <option key={size} value={size}>
        {size}
      </option>
    ) : (
      <option key={size} value={size} disabled>
        {size}
      </option>
    );
  });
  return sizes.length > 0 ? (
    <select
      className="size-selector"
      onChange={e => {
        setSize(e.target.value);
      }}
    >
      <option value="" selected disabled hidden>
        Select Size
      </option>
      {sizeOptions}
    </select>
  ) : (
    <p>One Size Fits All</p>
  );
};

export default SizeSelector;
