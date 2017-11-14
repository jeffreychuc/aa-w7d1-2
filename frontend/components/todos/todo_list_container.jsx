import { connect } from 'react-redux';
import { stub } from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { receiveTodo } from '../../actions/todo_actions.js';
import ToDoList from './todo_list.jsx';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
