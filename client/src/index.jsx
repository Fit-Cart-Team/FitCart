import './styles/qa.css';
import './styles/ratings.css';
import './styles/related.css';
import './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';
import axios from 'axios';
import dateFormatter from './components/QA/dateFormatter';

document.addEventListener(
  'click',
  event => {
    let element = event.toElement.className;
    let time = dateFormatter(event.timeStamp);
    let widget = event.path[event.path.length - 6].className;
    if (element !== '') {
      handleClickTrackingUserInteractions({
        element: element,
        widget: widget,
        time: time
      });
    }
  },
  false
);

const handleClickTrackingUserInteractions = postBody => {
  axios
    .post(`http://3.134.102.30/interactions/`, postBody)
    .catch(err => console.error(err));
};

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('app')
);
