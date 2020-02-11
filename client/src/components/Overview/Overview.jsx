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

import SocialMedia from './SocialMedia';

const Overview = ({ avg, total }) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [productInfo, setProductInfo] = useState({});
  const [styleInfo, setStyleInfo] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({ 0: '' });
  if (url !== id) {
    seturl(id);
  }

  // Async Attempt
  // const getData = async () => {
  //   const products = await axios.get(`http://3.134.102.30/products/${url}`);
  //   const styles = await axios.get(
  //     `http://3.134.102.30/products/${url}/styles`
  //   );

  //   setProductInfo(products.data);
  //   let styleReturn = styles.data.results;
  //   let emptyStyle = true;
  //   setStyleInfo(styles);
  //   styles.forEach((style, index) => {
  //     if (style['default?'] === 1) {
  //       setSelectedStyle({ index: index, name: style.name });
  //       emptyStyle = false;
  //     }
  //   });
  //   if (emptyStyle) {
  //     setSelectedStyle({ index: 0, name: styles[0].name });
  //   }
  // };
  useEffect(() => {
    axios
      .get(`http://3.134.102.30/products/${url}`)
      .then(results => {
        setProductInfo(results.data);
      })
      .then(() => {
        axios
          .get(`http://3.134.102.30/products/${url}/styles`)
          .then(results => {
            // console.log(results.data.results);
            let styles = results.data.results;
            let emptyStyle = true;
            setStyleInfo(styles);
            styles.forEach((style, index) => {
              if (style['default?'] === 1) {
                setSelectedStyle({ index: index, name: style.name });
                emptyStyle = false;
              }
            });
            if (emptyStyle) {
              setSelectedStyle({ index: 0, name: styles[0].name });
            }
          });
      });
  }, [url]);
  return (
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
          <AddCart styleInfo={styleInfo} selectedStyle={selectedStyle} />
          <SocialMedia url={url} />
        </div>
      </div>
      <ProductOverview productInfo={productInfo} />
    </div>
  );
};

export default Overview;
