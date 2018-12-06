import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';
// import PokemonIndex from './pokemon/pokemon_index';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
);

export default Root;
