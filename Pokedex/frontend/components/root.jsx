import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';
// import PokemonIndex from './pokemon/pokemon_index';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';


const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter></HashRouter>
    <PokemonIndexContainer />
    </HashRouter>
  </Provider>
);

export default Root;
