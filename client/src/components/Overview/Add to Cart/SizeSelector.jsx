import React from 'react';

const SizeSelector = ({ selectedStyle, setSize }) => {
  const skus = selectedStyle ? selectedStyle.skus : {};
  let sizes = Object.keys(skus);
  if (sizes[0] === 'null') {
    sizes = ['One Size'];
  }
  const sizeOptions = sizes.map(size => {
    return skus[size] > 0 ? (
      <option key={size} value={size}>
        {size}
      </option>
    ) : (
      <option key={size} value={size} style={{ fontStyle: 'italic' }} disabled>
        {size} - Out of Stock!
      </option>
    );
  });

  return sizes.length > 0 ? (
    <select
      className="size-selector"
      onChange={e => {
        setSize(e.target.value);
      }}
      defaultValue={'default'}
    >
      <option value="default" disabled hidden>
        SELECT SIZE
      </option>
      {sizeOptions}
    </select>
  ) : (
    <p>One Size Fits All</p>
  );
};

export default SizeSelector;
