import React from 'react';
import { useParams } from 'react-router-dom';

// Top-Level Details
import Details from './Details/Details';

// Add To Cart
import AddCart from './Add to Cart/AddCart';

// Image Gallery
import ImageGallery from './Image Gallery/ImageGallery';

// Description Information
import Information from './Information/Information';

// Style Selector
import StyleSelector from './Style Selector/StyleSelector';

const Overview = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Overview;
