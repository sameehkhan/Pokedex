import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const _defaultState = {
  pokemon: []
};


const pokemonReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return oldState;
  }

};


export default pokemonReducer;
