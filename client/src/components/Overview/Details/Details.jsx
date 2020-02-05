import React from 'react';

const Details = ({ productInfo, styleInfo }) => {
  return (
    <div className="product-info">
      <div className="product-category">{productInfo.category}</div>
      <div className="product-title">{productInfo.name}</div>
      <div className="product-price"></div>
    </div>
  );
};

export default Details;
