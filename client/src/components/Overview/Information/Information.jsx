import React from 'react';

import ProductOverview from './ProductOverview';
import SocialMedia from './SocialMedia';

const Information = ({ productInfo, url }) => {
  return (
    <div className="overview-bottom">
      <ProductOverview productInfo={productInfo} />
      <SocialMedia url={url} />
    </div>
  );
};

export default Information;
