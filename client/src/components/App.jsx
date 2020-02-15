import React, { useState, Suspense, lazy } from 'react';

import Homepage from './Homepage';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionsAnswers from './QA/QuestionsAnswers';

// const Overview = lazy(() => import('./Overview/Overview'));
// const RelatedProducts = lazy(() => import('./RelatedProducts/RelatedProducts'));
// const RatingsReviews = lazy(() => import('./RatingsReviews/RatingsReviews'));
// const QuestionsAnswers = lazy(() => import('./QA/QuestionsAnswers'));

import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [avg, setAppAvg] = useState(0);
  const [total, setAppTotal] = useState(0);
  const [globalProdInfo, setGlobalProdInfo] = useState();
  const [globalStyleInfo, setGlobalStyleInfo] = useState();
  return (
    <React.Fragment>
      <NavBar />
      {/* <Suspense fallback={<div>LOADING</div>}> */}
      <Switch>
        <Route exact path="/">
          <Homepage />
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
          />
          <RelatedProducts
            avg={avg}
            globalProdInfo={globalProdInfo}
            globalStyleInfo={globalStyleInfo}
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
      {/* </Suspense> */}
    </React.Fragment>
  );
};

export default App;
