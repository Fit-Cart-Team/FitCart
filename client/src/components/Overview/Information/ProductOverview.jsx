import React from 'react';

const ProductOverview = ({ productInfo }) => {
  const { description, features } = productInfo;
  console.log(features);
  const displayFeatures = features ? (
    features.map(feature => (
      <p key={feature.feature}>
        {feature.feature} | {feature.value || ''}
      </p>
    ))
  ) : (
    <p></p>
  );
  return (
    <div className="product-description">
      <div className="product-description-left">{description}</div>
      <div className="product-description-right">{displayFeatures}</div>
    </div>
  );
};

export default ProductOverview;
