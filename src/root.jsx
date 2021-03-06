import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history } from './store';
import App from './app/components/App';
import NotFound from './not-found';
import './style/App.css';
import './style/index.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/employee/:id" component={App} />
          <Route exact path="/add" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
/* eslint-enable */

export default Root;
