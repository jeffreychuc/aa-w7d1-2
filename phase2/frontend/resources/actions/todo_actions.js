import * as APIUtil from '../../util/todo_api_util.js';
import { receiveErrors, clearErrors } from './error_actions.js';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});

// async
export const fetchTodos = () => (dispatch) => (
  APIUtil.index().then((todos) => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => (dispatch) => {
  return APIUtil.postTodo(todo).then(
    (result) => dispatch(receiveTodo(result)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};
