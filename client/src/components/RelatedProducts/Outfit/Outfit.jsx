import React, { useState, useEffect } from 'react';
import ProdCard from '../OtherProducts/ProdCard';

const Outfit = ({ globalProdInfo, globalStyleInfo }) => {
  const [outfit, setoutfit] = useState([]);
  const [outfitIndex, setoutfitIndex] = useState(0);
  useEffect(() => {
    let cache = JSON.parse(localStorage.getItem('outfit')) || [];
    setoutfit(cache);
  }, []);

  const addProduct = () => {
    const product = [globalProdInfo, globalStyleInfo];
    let currOutfit = [...outfit];
    let addable = true;

    for (let prod of currOutfit) {
      if (prod[0].id === globalProdInfo.id) {
        addable = false;
        break;
      }
    }
    if (addable) {
      currOutfit.push(product);
      localStorage.setItem('outfit', JSON.stringify(currOutfit));
      setoutfit(currOutfit);
    }
  };

  const removeProduct = currProduct => {
    let currOutfit = JSON.parse(localStorage.getItem('outfit'));
    currOutfit = currOutfit.filter((prod, index) => {
      return prod[0].id !== currProduct.id;
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
        <h2
          style={{
            textAlign: 'center',
            marginTop: '5%',
            marginBottom: '0',
            flexGrow: '1'
          }}
        >
          {globalProdInfo ? globalProdInfo.name : ''}
        </h2>
        <i
          className="fas fa-plus-circle"
          style={{ fontSize: '600%', flexGrow: '1', color: 'var(--color)' }}
        ></i>
        <div className="card-container">
          <h1>Total: {outfit.length}</h1>
        </div>
      </div>
      {outfitIndex > 0 ? (
        <a
          className="related-prev outfit-prev"
          onClick={() => {
            if (outfitIndex > 0) {
              setoutfitIndex(prev => prev - 1);
            }
          }}
        >
          &#9668;
        </a>
      ) : (
        <></>
      )}
      {outfitCards.slice(outfitIndex, outfitIndex + 3)}
      {outfitIndex < outfit.length - 3 ? (
        <a
          className="related-next outfit-next"
          onClick={() => {
            if (outfitIndex < outfit.length - 2)
              setoutfitIndex(prev => prev + 1);
          }}
        >
          &#9658;
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Outfit;
