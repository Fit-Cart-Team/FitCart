import React, { useState, useEffect } from 'react';

import Homepage from './Homepage';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionsAnswers from './QA/QuestionsAnswers';

import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [avg, setAppAvg] = useState(0);
  const [total, setAppTotal] = useState(0);
  const [globalProdInfo, setGlobalProdInfo] = useState();
  const [globalStyleInfo, setGlobalStyleInfo] = useState();
  const [dark, setdark] = useState(false);

  const [outfit, setoutfit] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('theme', 'dark');
      setdark(true);
    }
    let cache = JSON.parse(localStorage.getItem('outfit')) || [];
    setoutfit(cache);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }, [dark]);

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
    currOutfit = currOutfit.filter(prod => {
      return prod[0].id !== currProduct.id;
    });
    localStorage.setItem('outfit', JSON.stringify(currOutfit));
    setoutfit(currOutfit);
  };

  return (
    <React.Fragment>
      <NavBar setdark={setdark} dark={dark} cartAmount={outfit.length} />
      <Switch>
        <Route exact path="/">
          <Homepage outfit={outfit} removeProduct={removeProduct} />
        </Route>
        <Route path="/:id">
          <div className="announcement">
            <i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT{' '}
            <b>OFFER</b> - <a href="#">NEW PRODUCT HIGHLIGHT</a>
          </div>
          <Overview
            avg={avg}
            total={total}
            setGlobalProdInfo={setGlobalProdInfo}
            setGlobalStyleInfo={setGlobalStyleInfo}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
          <RelatedProducts
            avg={avg}
            globalProdInfo={globalProdInfo}
            addProduct={addProduct}
            removeProduct={removeProduct}
            outfit={outfit}
          />
          <QuestionsAnswers />
          <RatingsReviews
            ratingAverage={avg}
            totalReviews={total}
            setAppAvg={setAppAvg}
            setAppTotal={setAppTotal}
            productInfo={globalProdInfo}
          />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
