import { createStore, applyMiddlewar } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';


const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
