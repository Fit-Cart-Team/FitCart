import React from 'react';

const ProdCard = ({ product, style }) => {
  console.log(product);
  return (
    <div className="product-card">
      <img
        className="card-image"
        src={style ? style.photos[0].thumbnail_url : ''}
        alt="Avatar"
        style={{ width: '100%' }}
      />
      <div className="card-container">
        <h2>
          <b>{product.category}</b>
        </h2>
        <h4>
          <b>{product.name}</b>
        </h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProdCard;
