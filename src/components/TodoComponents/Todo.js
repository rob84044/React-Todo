import React from 'react';
import classNames from 'classnames';

function Todo(props) {
  const todoItemClasses = classNames({
    todoItem: true,
    strike: props.todo.completed
  });

  return (
    <div className="todoItemDiv">
      <p
        onClick={props.lineThroughHandler}
        className={todoItemClasses}
        data-todo={props.todo.id}
      >
        {props.todo.task}
      </p>
    </div>
  );
}

export default Todo;
