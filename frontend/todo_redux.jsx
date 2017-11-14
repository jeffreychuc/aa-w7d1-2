import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import rootReducer from './reducers/root_reducer.js';
import * as action from './actions/todo_actions.js';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', function() {
  const rootEl = document.getElementById('rootEl');
  ReactDOM.render(<h1> hi </h1>, rootEl);
  ReactDOM.render(<Root store={store}/>, rootEl);
});

window.store = store;
window.receiveTodo = action.receiveTodo;
window.receiveTodos = action.receiveTodos;
window.allTodos = allTodos;
