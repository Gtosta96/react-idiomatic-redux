import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);


Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Root;
