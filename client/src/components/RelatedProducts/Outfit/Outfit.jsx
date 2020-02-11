import React, { useState, useEffect } from 'react';
import ProdCard from '../OtherProducts/ProdCard';

const Outfit = ({ prodInfo, styleInfo }) => {
  const [outfit, setoutfit] = useState([]);
  const [outfitIndex, setoutfitIndex] = useState(0);
  console.log('huh');
  useEffect(() => {
    let cache = JSON.parse(localStorage.getItem('outfit')) || [];
    setoutfit(cache);
  }, []);

  const addProduct = () => {
    const product = [prodInfo, styleInfo];
    let currOutfit = outfit;
    let addable = true;

    for (let prod of currOutfit) {
      if (prod[0].id === prodInfo.id) {
        addable = false;
        break;
      }
    }
    if (addable) {
      console.log(currOutfit);
      currOutfit.push(product);
      localStorage.setItem('outfit', JSON.stringify(currOutfit));
      console.log(currOutfit);
      setoutfit(currOutfit);
    }
  };

  const removeProduct = () => {
    let currOutfit = JSON.parse(localStorage.getItem('outfit'));
    currOutfit = currOutfit.filter((prod, index) => {
      return prod[0].id !== prodInfo.id;
    });
    localStorage.setItem('outfit', JSON.stringify(currOutfit));
    setoutfit(currOutfit);
  };

  const outfitCards =
    outfit.length > 0
      ? outfit.map((prod, index) => (
          <ProdCard
            key={index}
            product={prod[0]}
            style={prod[1]}
            removeProduct={removeProduct}
            type="outfit"
          />
        ))
      : [];
  return (
    <div className="outfit">
      <div className="add-card" onClick={addProduct}>
        ADD TO FAVORITES
      </div>
      {outfitIndex > 0 ? (
        <a
          className="related-prev"
          onClick={() => {
            if (outfitIndex > 0) {
              setoutfitIndex(prev => prev - 1);
            }
          }}
        >
          {/* {'🡠'} */}
          &#129120;
        </a>
      ) : (
        <></>
      )}
      {outfitCards.slice(outfitIndex, outfitIndex + 4)}
      {outfitIndex < outfit.length - 4 ? (
        <a
          className="related-next"
          onClick={() => {
            if (outfitIndex < relatedProds.length - 4)
              setoutfitIndex(prev => prev + 1);
          }}
        >
          {/* {'🡢'} */}
          &#129122;
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Outfit;
