import React from 'react';
import ProdCard from './RelatedProducts/OtherProducts/ProdCard';

const Homepage = ({ outfit, removeProduct }) => {
  const outfitCards =
    outfit.length > 0
      ? outfit.map((prod, index) => (
          <ProdCard
            key={index}
            product={prod[0]}
            style={prod[1]}
            removeProduct={removeProduct}
            type="outfit"
          />
        ))
      : [];
  return (
    <>
      <h1 className="homepage-title">
        Get Started! Here's your outfit at the moment
      </h1>
      <div className="homepage">{outfitCards}</div>
    </>
  );
};

export default Homepage;
