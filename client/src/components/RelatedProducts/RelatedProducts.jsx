import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import OtherProductList from './OtherProducts/OtherProductList';
import Outfit from './Outfit/Outfit';

const RelatedProducts = ({ prodInfo, styleInfo }) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [relatedProds, setrelatedProds] = useState([]);
  const [relatedStyles, setrelatedStyles] = useState([]);

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    setrelatedProds([]);
    setrelatedStyles([]);
    axios.get(`http://3.134.102.30/products/${url}/related`).then(results => {
      Promise.all(
        results.data.map(product => {
          return axios
            .get(`http://3.134.102.30/products/${product}`)
            .then(results => {
              setrelatedProds(prev => [...prev, results.data]);
            })
            .then(() => {
              axios
                .get(`http://3.134.102.30/products/${product}/styles`)
                .then(results => {
                  let styles = results.data.results;
                  let needStyle = true;
                  styles.forEach(style => {
                    if (style['default?'] === 1) {
                      setrelatedStyles(prev => [...prev, style]);
                      needStyle = false;
                    }
                  });
                  if (needStyle) {
                    setrelatedStyles(prev => [...prev, styles[0]]);
                  }
                });
            });
        })
      );
    });
  }, [url]);

  return (
    <>
      <div style={{ fontSize: '1.2vw' }}>RELATED PRODUCTS</div>
      <OtherProductList
        relatedProds={relatedProds}
        relatedStyles={relatedStyles}
        prodInfo={prodInfo}
      />
      <div style={{ fontSize: '1.2vw' }}>MY OUTFIT</div>
      <Outfit prodInfo={prodInfo} styleInfo={styleInfo} />
    </>
  );
};

export default RelatedProducts;
