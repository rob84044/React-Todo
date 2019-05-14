import React from 'react';

function Todo(props) {
  return (
    <div className="todoItemDiv">
      <p className="todoItem">{props.todo.task}</p>
    </div>
  );
}

export default Todo;
