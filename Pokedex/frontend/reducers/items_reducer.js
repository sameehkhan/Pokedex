import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
const _defaultState = {
  pokemon: []
};


constitemsReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.items;
    case RECEIVE_ONE_POKEMON:
      return action.items;
    default:
      return oldState;
  }

};


export default itemsReducer;
