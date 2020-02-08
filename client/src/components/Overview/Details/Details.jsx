import React from 'react';
import Stars from '../../Stars';

const Details = ({ productInfo, styleInfo, selectedStyle }) => {
  let currStyle = styleInfo[selectedStyle.index];
  let currPrice;
  if (currStyle) {
    currPrice =
      currStyle.sale_price === '0' ? (
        <p>${currStyle.original_price}</p>
      ) : (
        <div className="prices">
          <p className="sale-price">${currStyle.sale_price}</p>
          <p className="original-price">${currStyle.original_price}</p>{' '}
        </div>
      );
  }

  let prodCat = productInfo.category ? productInfo.category.toUpperCase() : '';
  return (
    <div className="product-info">
      <Stars avg={3.9} />
      <span>
        <a href="#ratings-reviews" style={{ fontSize: 'small' }}>
          Read all reviews
        </a>
      </span>
      <div className="product-category">{prodCat}</div>
      <div className="product-title">{productInfo.name}</div>
      <div className="product-price">{currPrice}</div>
    </div>
  );
};

export default Details;
