import React from 'react';

import ProductOverview from './ProductOverview';
import SocialMedia from './SocialMedia';

const Information = ({ productInfo }) => {
  return (
    <div className="overview-bottom">
      <ProductOverview productInfo={productInfo} />
      <SocialMedia />
    </div>
  );
};

export default Information;
