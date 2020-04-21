import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Image Gallery
import ImageGallery from './Image Gallery/ImageGallery';

// Top-Level Details
import Details from './Details/Details';

// Style Selector
import StyleSelector from './Style Selector/StyleSelector';

// Add To Cart
import AddCart from './Add to Cart/AddCart';

// Description Information
import ProductOverview from './Information/ProductOverview';

// Social Media Buttons
import SocialMedia from './SocialMedia';

const Overview = ({
  avg,
  total,
  setGlobalProdInfo,
  setGlobalStyleInfo,
  addProduct,
  removeProduct,
}) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [productInfo, setProductInfo] = useState({});
  const [styleInfo, setStyleInfo] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({ 0: '' });
  const [loading, setloading] = useState(true);
  if (url !== id) {
    seturl(id);
  }
  useEffect(() => {
    const productPromise = axios.get(`http://18.224.200.47/products/${url}`);
    const stylePromise = axios.get(
      `http://18.224.200.47/products/${url}/styles`
    );

    Promise.all([productPromise, stylePromise]).then((results) => {
      setProductInfo(results[0].data);
      setGlobalProdInfo(results[0].data);
      let styleResults = results[1].data.results;
      let emptyStyle = true;
      setStyleInfo(styleResults);
      styleResults.forEach((style, index) => {
        if (style['default?'] === 1) {
          setSelectedStyle({ index: index, name: style.name });
          setGlobalStyleInfo(style);
          emptyStyle = false;
        }
      });
      if (emptyStyle) {
        setSelectedStyle({ index: 0, name: styleResults[0].name });
        setGlobalStyleInfo(styleResults[0]);
      }
      setloading(false);
    });
  }, [url]);

  return !loading ? (
    <div className="overview">
      <div className="overview-top">
        <ImageGallery
          styleInfo={styleInfo}
          selectedStyle={selectedStyle}
          url={url}
        />
        <div className="right-hand-overview">
          <Details
            productInfo={productInfo}
            styleInfo={styleInfo}
            selectedStyle={selectedStyle}
            avg={avg}
            total={total}
          />
          <div className="style-label">
            <b>Style > </b>
            {selectedStyle.name}
          </div>
          <StyleSelector
            styleInfo={styleInfo}
            setSelectedStyle={setSelectedStyle}
            selectedStyle={selectedStyle}
          />
          <AddCart
            styleInfo={styleInfo}
            selectedStyle={selectedStyle}
            productInfo={productInfo}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
          <SocialMedia url={url} />
        </div>
      </div>
      <ProductOverview productInfo={productInfo} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Overview;
