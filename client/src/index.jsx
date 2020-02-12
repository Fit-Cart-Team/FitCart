import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('app')
);
