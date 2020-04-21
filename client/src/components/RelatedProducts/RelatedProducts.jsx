import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import OtherProductList from './OtherProducts/OtherProductList';
import Outfit from './Outfit/Outfit';

const RelatedProducts = ({
  globalProdInfo,
  addProduct,
  removeProduct,
  outfit,
}) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [relatedProds, setrelatedProds] = useState([]);
  const [relatedStyles, setrelatedStyles] = useState([]);

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/${url}/related`)
      .then((results) => {
        let noDuplicateProducts = new Set(
          results.data.filter((prod) => {
            return prod !== Number(id);
          })
        );
        // Get all the product information for each related product
        const prodPromises = [];
        noDuplicateProducts.forEach((product) => {
          prodPromises.push(
            axios.get(`http://18.224.200.47/products/${product}`)
          );
        });

        // Get all the style information for each related product
        const stylePromises = [];
        noDuplicateProducts.forEach((product) => {
          stylePromises.push(
            axios.get(`http://18.224.200.47/products/${product}/styles`)
          );
        });

        Promise.all(prodPromises).then((products) => {
          // Set state with each product's information
          const prodData = products.map((prod) => prod.data);
          setrelatedProds(prodData);
          Promise.all(stylePromises).then((styles) => {
            // Get default style for each product and set state
            const tempStyleData = styles.map((style) => style.data);

            const styleData = tempStyleData.map((style) => {
              let styleResults = style.results;
              let defaultStyle = styleResults[0];
              styleResults.forEach((style) => {
                if (style['default?'] === 1) {
                  defaultStyle = style;
                }
              });
              return defaultStyle;
            });
            setrelatedStyles(styleData);
          });
        });
      });
  }, [url]);

  return globalProdInfo ? (
    <>
      <div
        className="related-products-header"
        style={{
          fontSize: '1.5vw',
          fontWeight: 'bold',
          fontStyle: 'italic',
          marginLeft: '6%',
        }}
      >
        RELATED PRODUCTS
      </div>
      <OtherProductList
        relatedProds={relatedProds}
        relatedStyles={relatedStyles}
        globalProdInfo={globalProdInfo}
      />
      <div
        className="outfit-header"
        style={{
          fontSize: '1.5vw',
          fontWeight: 'bold',
          fontStyle: 'italic',
          marginLeft: '6%',
        }}
      >
        MY OUTFIT
      </div>
      <Outfit
        globalProdInfo={globalProdInfo}
        addProduct={addProduct}
        removeProduct={removeProduct}
        outfit={outfit}
      />
    </>
  ) : (
    <div></div>
  );
};

export default RelatedProducts;
