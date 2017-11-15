import React from 'react';

const TodoListItem = ({todo}) =>  {
  return (<div><li>{todo.title}</li><li>{todo.body}</li></div>);
};

export default TodoListItem;
