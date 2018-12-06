import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});
