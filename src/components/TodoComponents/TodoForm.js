import React from 'react';

function TodoForm(props) {
  return (
    <form name="todoForm" onSubmit={props.todoHandler}>
      <input
        type="text"
        value={props.task}
        placeholder="Enter Todo Item Here"
        name="task"
        onChange={props.changeHandler}
      />
      <button onClick={props.todoHandler}>Add Task</button>
      <button onClick={props.removeHandler}>Remove Task</button>
    </form>
  );
}

export default TodoForm;
