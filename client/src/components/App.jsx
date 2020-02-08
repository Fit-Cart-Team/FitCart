import React, { useState } from 'react';
import Homepage from './Homepage';
import Overview from './Overview/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionsAnswers from './QA/QuestionsAnswers';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [avg, setAppAvg] = useState(0);
  const [total, setAppTotal] = useState(0);
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/:id">
          <div className="announcement">
            <i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT{' '}
            <b>OFFER</b> - <a href="#">NEW PRODUCT HIGHLIGHT</a>
          </div>
          <Overview avg={avg} total={total} />
          <QuestionsAnswers />
          <RatingsReviews setAppAvg={setAppAvg} setAppTotal={setAppTotal} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
