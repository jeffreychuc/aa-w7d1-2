import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions.js';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
    // console.log('successfully received errors');
    // console.log(action.errors);
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
