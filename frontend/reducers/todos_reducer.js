import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {
        todos: [action.todos]
      }
      return newState;
    case RECEIVE_TODO:
      let newState = {
        todos: [...state.todos, action.todo]
      }
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
