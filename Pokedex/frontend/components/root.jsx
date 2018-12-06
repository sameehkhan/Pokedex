import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>
);

export default Root;
