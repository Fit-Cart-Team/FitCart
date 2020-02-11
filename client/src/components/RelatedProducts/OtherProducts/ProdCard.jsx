import React, { useState, useEffect } from 'react';
import Stars from '../../Stars';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ProdCard = ({ product, style }) => {
  let history = useHistory();
  const defaultIMG = 'https://img.moglimg.com/p/I/P/N/d/MINIPN3LI0NZS.jpg';

  const [avg, setavg] = useState(0);

  useEffect(() => {
    axios
      .get(`http://3.134.102.30/reviews/${product.id}/meta`)
      .then(({ data }) => {
        let totalQuantity = 0;
        let ratingSum = 0;

        for (let rating in data.ratings) {
          totalQuantity += data.ratings[rating];
          ratingSum += rating * data.ratings[rating];
        }

        let ratingAvg = ratingSum / totalQuantity;

        setavg(ratingAvg);
      });
  }, []);

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
    <div
      className="product-card"
      onClick={() => {
        history.push(`${product.id}`);
      }}
    >
      <img
        className="card-image"
        src={
          style
            ? style.photos[0].thumbnail_url
              ? style.photos[0].thumbnail_url
              : defaultIMG
            : ''
        }
        alt="Avatar"
        style={{ width: '100%' }}
      />
      <div className="card-container">
        <p>{product.category}</p>
        <p>
          <b>{product.name}</b>
        </p>
        <div>{currPrice}</div>
        <Stars avg={avg} />
      </div>
    </div>
  );
};

export default ProdCard;
