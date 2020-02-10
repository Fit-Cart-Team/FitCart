import React, { useState } from 'react';
import ProdCard from './ProdCard';

const OtherProductList = ({ relatedProds, relatedStyles }) => {
  const [relatedProductsIndex, setrelatedProductsIndex] = useState(0);
  console.log(relatedProds, relatedStyles);
  const prodCards = relatedProds.map((product, index) => (
    <ProdCard key={index} product={product} style={relatedStyles[index]} />
  ));
  return (
    <div className="related-products">
      {prodCards.slice(relatedProductsIndex, relatedProductsIndex + 5)}
    </div>
  );
};

export default OtherProductList;
