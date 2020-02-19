import React from 'react';
import Stars from '../../Stars';

const Details = ({ productInfo, styleInfo, selectedStyle, avg, total }) => {
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
    // < className="product-info">
    <>
      <div className="star-container">
        <Stars avg={avg} />
        <a
          className="reviews-link"
          href="#ratings-reviews"
          style={{ fontSize: 'small', color: 'var(--link-color)' }}
        >
          {total === 0
            ? 'Be the first to review this product!'
            : total === 1
            ? `Read 1 review`
            : `Read all ${total} reviews`}
        </a>
      </div>
      <div className="product-category">{prodCat}</div>
      <div className="product-title">{productInfo.name}</div>
      <div className="product-price">{currPrice}</div>
    </>
  );
};

export default Details;
