import React from 'react';
import { merge } from 'lodash';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
              <li>{this.props.todo.title} {this.props.todo.body}
              <button onClick={() =>
              this.props.removeTodo(this.props.todo)}>
              delete
              </button>
              <button onClick={() =>
              this.props.receiveTodo(this.flip(this.props.todo))}>
              {this.props.todo['done'] ? 'done' : 'undone'}
              </button>
              </li>
            </div>);
  }

  flip(todo)  {
    const newTodo = merge({}, todo);
    console.log(newTodo['done'], 'old');
    const newDone = todo['done'] ? false : true;
    newTodo['done'] = newDone;
    console.log(newTodo['done'], 'new');
    return newTodo;
  }
}

export default TodoListItem;
