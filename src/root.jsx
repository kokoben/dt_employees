import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history } from './store';
import App from './App';
import NotFound from './not-found';
import './App.css';
import './index.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
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
