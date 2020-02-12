import React, { useState, useEffect } from 'react';
import Stars from '../../Stars';
import { useHistory } from 'react-router-dom';
import { Header, Button, Icon, Modal, Grid } from 'semantic-ui-react';
import axios from 'axios';

const ProdCard = ({ product, style, prodInfo, removeProduct, type }) => {
  let history = useHistory();
  const defaultIMG =
    'https://avatars0.githubusercontent.com/u/5233442?s=400&v=4';

  const [avg, setavg] = useState(0);
  const [modalOpen, setmodalOpen] = useState(false);
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
  }, [product]);

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
  let comparisonChart;
  if (type === 'related') {
    let prodFeatures = {};
    let cardFeatures = {};
    prodInfo.features.forEach(
      feature => (prodFeatures[feature.feature] = feature.value)
    );

    product.features.forEach(
      feature => (cardFeatures[feature.feature] = feature.value)
    );
    const featureSet = new Set(
      Object.keys(prodFeatures).concat(Object.keys(cardFeatures))
    );
    comparisonChart = [...featureSet].map(feature => {
      return (
        <Grid.Row key={feature}>
          <Grid.Column textAlign="right">
            {prodFeatures[feature] ? '✓ ' + prodFeatures[feature] : ''}
          </Grid.Column>
          <Grid.Column textAlign="center">{feature}</Grid.Column>
          <Grid.Column textAlign="left">
            {cardFeatures[feature] ? '✓ ' + cardFeatures[feature] : ''}
          </Grid.Column>
        </Grid.Row>
      );
    });
  }
  const handleClose = () => {
    setmodalOpen(false);
  };

  const handleOpen = () => {
    setmodalOpen(true);
  };

  return (
    <>
      <div
        className="product-card"
        onClick={e => {
          if (!e.target.className.includes('card-icon')) {
            history.push(`${product.id}`);
          }
        }}
      >
        {type === 'related' ? (
          <i className="far fa-star card-icon" onClick={handleOpen}></i>
        ) : (
          <i
            className="far fa-times-circle card-icon"
            onClick={() => {
              if (type === 'outfit') {
                removeProduct(product);
              }
            }}
          ></i>
        )}
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
      {type === 'related' && (
        <Modal open={modalOpen} onClose={handleClose} size="small" closeIcon>
          <Header content="Comparing" />
          <Modal.Content>
            <Grid columns={3} relaxed>
              {type === 'related' && comparisonChart}
            </Grid>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export default ProdCard;
