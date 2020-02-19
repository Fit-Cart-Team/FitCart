import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Image Gallery
import ImageGallery from './Image Gallery/ImageGallery';
// const ImageGallery = lazy(() => import('./Image Gallery/ImageGallery'));

// Top-Level Details
import Details from './Details/Details';
// const Details = lazy(() => import('./Details/Details'));

// Style Selector
import StyleSelector from './Style Selector/StyleSelector';
// const StyleSelector = lazy(() => import('./Style Selector/StyleSelector'));

// Add To Cart
import AddCart from './Add to Cart/AddCart';
// const AddCart = lazy(() => import('./Add to Cart/AddCart'));

// Description Information
import ProductOverview from './Information/ProductOverview';
// const ProductOverview = lazy(() => import('./Information/ProductOverview'));
import SocialMedia from './SocialMedia';
// const SocialMedia = lazy(() => import('./SocialMedia'));

const Overview = ({
  avg,
  total,
  setGlobalProdInfo,
  setGlobalStyleInfo,
  addProduct,
  removeProduct
}) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [productInfo, setProductInfo] = useState({});
  const [styleInfo, setStyleInfo] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({ 0: '' });
  const [loading, setloading] = useState(false);
  if (url !== id) {
    seturl(id);
  }
  useEffect(() => {
    const productPromise = axios.get(`http://3.134.102.30/products/${url}`);
    const stylePromise = axios.get(
      `http://3.134.102.30/products/${url}/styles`
    );

    Promise.all([productPromise, stylePromise]).then(results => {
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
      setloading(true);
    });
  }, [url]);

  return loading ? (
    // <Suspense fallback={<div>LOADING</div>}>
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
    // </Suspense>
    <div></div>
  );
};

export default Overview;
