import React from 'react';

import ProductOverview from './ProductOverview';
import SocialMedia from './SocialMedia';

const Information = ({ id }) => {
  return (
    <div className="bottom-information">
      <ProductOverview id={id} />
      <SocialMedia />
    </div>
  );
};

export default Information;
