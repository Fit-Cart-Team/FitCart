import React from 'react';

const ProductOverview = ({ productInfo }) => {
  const { description, features, slogan } = productInfo;
  const displayFeatures = features ? (
    features.map(feature => (
      <p key={feature.feature}>
        <b>✓</b> {feature.feature}: {feature.value || ''}
      </p>
    ))
  ) : (
    <p></p>
  );
  return (
    <div className="product-description">
      <div className="product-description-left">
        <div className="slogan">{slogan}</div>
        <div className="description">{description}</div>
      </div>
      <div className="product-description-right">{displayFeatures}</div>
    </div>
  );
};

export default ProductOverview;
