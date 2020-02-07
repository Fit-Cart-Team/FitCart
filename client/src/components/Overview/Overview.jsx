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
import Information from './Information/Information';

const Context = React.createContext('lol');

const Overview = () => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [productInfo, setProductInfo] = useState({});
  const [styleInfo, setStyleInfo] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({ 0: '' });
  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios
      .get(`http://3.134.102.30/products/${url}`)
      .then(results => {
        // console.log(results.data);
        setProductInfo(results.data);
      })
      .then(() => {
        axios
          .get(`http://3.134.102.30/products/${url}/styles`)
          .then(results => {
            // console.log(results.data.results);
            let styles = results.data.results;
            setStyleInfo(styles);
            styles.forEach((style, index) => {
              if (style['default?'] === 1) {
                setSelectedStyle({ index: index, name: style.name });
              }
            });
          });
      });
  }, [url]);

  return (
    <div className="overview">
      <div className="overview-top">
        <ImageGallery styleInfo={styleInfo} selectedStyle={selectedStyle} />
        <div className="right-hand-overview">
          <Details
            productInfo={productInfo}
            styleInfo={styleInfo}
            selectedStyle={selectedStyle}
          />
          <p className="style-label">
            <b>Style > </b>
            {selectedStyle.name}
          </p>
          <StyleSelector
            styleInfo={styleInfo}
            setSelectedStyle={setSelectedStyle}
            selectedStyle={selectedStyle}
          />
          <AddCart styleInfo={styleInfo} selectedStyle={selectedStyle} />
        </div>
      </div>
      <Information productInfo={productInfo} />
    </div>
  );
};

export default Overview;
