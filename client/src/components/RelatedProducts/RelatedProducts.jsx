import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import OtherProductList from './OtherProducts/OtherProductList';
import Outfit from './Outfit/Outfit';

const RelatedProducts = ({ avg }) => {
  const { id } = useParams();
  const [url, seturl] = useState(id);
  const [relatedProds, setrelatedProds] = useState([]);
  const [relatedStyles, setrelatedStyles] = useState([]);

  if (url !== id) {
    seturl(id);
  }

  useEffect(() => {
    axios.get(`http://3.134.102.30/products/${url}/related`).then(results => {
      setrelatedProds([]);
      setrelatedStyles([]);
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
      <div>Related Products</div>
      <OtherProductList
        relatedProds={relatedProds}
        relatedStyles={relatedStyles}
      />
      <div>My Outfit</div>
      <Outfit />
    </>
  );
};

export default RelatedProducts;
