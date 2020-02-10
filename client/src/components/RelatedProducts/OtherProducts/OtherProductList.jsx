import React from 'react';
import ProdCard from './ProdCard';

const OtherProductList = ({ relatedProds, relatedStyles }) => {
  console.log(relatedProds, relatedStyles);
  const prodCards = relatedProds.map((product, index) => (
    <ProdCard product={product} style={relatedStyles[index]} />
  ));
  return <div className="related-products">{prodCards}</div>;
};

export default OtherProductList;
