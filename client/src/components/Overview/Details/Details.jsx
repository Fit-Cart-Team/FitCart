import React from 'react';

const Details = ({ productInfo, styleInfo, selectedStyle }) => {
  return (
    <div className="product-info">
      <div className="stars">S T A R S</div>
      <div className="product-category">{productInfo.category}</div>
      <div className="product-title">{productInfo.name}</div>
      <div className="product-price"></div>
    </div>
  );
};

export default Details;
