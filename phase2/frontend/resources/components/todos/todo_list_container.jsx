import { connect } from 'react-redux';
import { stub } from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { fetchTodos, createTodo, removeTodo, receiveTodo } from '../../actions/todo_actions.js';
import ToDoList from './todo_list.jsx';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
