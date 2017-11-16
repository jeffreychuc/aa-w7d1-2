import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoListForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render()  {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, idx)=> (<TodoListItem receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo} todo={todo} key={idx}/>))}
        </ul>
        <TodoListForm createTodo={this.props.createTodo} errors={this.props.errors}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

export default TodoList;
