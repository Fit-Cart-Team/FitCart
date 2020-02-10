import React from 'react';
import Stars from '../../Stars';
import { Link } from 'react-router-dom';

const ProdCard = ({ product, style }) => {
  let currPrice;
  if (style) {
    currPrice =
      style.sale_price === '0' ? (
        <p>${style.original_price}</p>
      ) : (
        <div className="prices">
          <p className="sale-price">${style.sale_price}</p>
          <p className="original-price">${style.original_price}</p>{' '}
        </div>
      );
  }
  return (
    <Link to={`${product.id}#`}>
      <div className="product-card">
        <img
          className="card-image"
          src={style ? style.photos[0].thumbnail_url : ''}
          alt="Avatar"
          style={{ width: '100%' }}
        />
        <div className="card-container">
          <p>{product.category}</p>
          <h4>
            <b>{product.name}</b>
          </h4>
          <div>{currPrice}</div>
          <Stars avg={3.5} />
        </div>
      </div>
    </Link>
  );
};

export default ProdCard;
