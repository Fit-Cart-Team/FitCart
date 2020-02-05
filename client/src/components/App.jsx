import React from 'react';
import Overview from './Overview/Overview';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { test } = this.props;
    return (
      <Route path="/:id">
        <Overview />
      </Route>
    );
  }
}

export default App;
