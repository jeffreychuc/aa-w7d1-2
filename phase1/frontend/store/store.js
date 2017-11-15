import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/root_reducer.js';
import thunk from '../../middleware/thunk.js';
import logger from 'redux-logger';

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
