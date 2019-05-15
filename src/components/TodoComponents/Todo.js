import React from 'react';

const Todo = props => {
  return (
    <div
      style={
        props.todo.completed
          ? { textDecoration: 'line-through', backgroundColor: 'red' }
          : null
      }
      className="todoItemDiv"
      onClick={() => props.lineThroughHandler(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
