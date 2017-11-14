import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import ToDoListForm from './todo_form.jsx';

const ToDoList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo, idx)=> (<TodoListItem todo={todo} key={idx}/>))}
    </ul>
    <ToDoListForm receiveTodo={props.receiveTodo}/>
  </div>
);

export default ToDoList;
