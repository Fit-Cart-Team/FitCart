import React from 'react';

const Details = ({ productInfo, styleInfo, selectedStyle }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let currPrice;
  if (currStyle) {
    currPrice =
      currStyle.sale_price === '0' ? (
        <p>$ {currStyle.original_price}</p>
      ) : (
        <div className="prices">
          <p className="sale-price">$ {currStyle.sale_price}</p>
          <p className="original-price">$ {currStyle.original_price}</p>{' '}
        </div>
      );
  }
  return (
    <div className="product-info">
      <div className="stars">S T A R S</div>
      <div className="product-category">{productInfo.category}</div>
      <div className="product-title">{productInfo.name}</div>
      <div className="product-price">{currPrice}</div>
    </div>
  );
};

export default Details;
