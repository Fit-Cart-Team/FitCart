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
        {outfitCards.length > 0
          ? 'Here is your outfit at the moment'
          : 'Add / and a number to the URL to begin shopping!'}
      </h1>
      <div className="homepage">{outfitCards}</div>
    </>
  );
};

export default Homepage;
