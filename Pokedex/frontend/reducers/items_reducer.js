import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
const _defaultState = {
  pokemon: []
};


const itemsReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_ONE_POKEMON:
      return action.pokemon.items;
    default:
      return oldState;
  }

};


export default itemsReducer;
