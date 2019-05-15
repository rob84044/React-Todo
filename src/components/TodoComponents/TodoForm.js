import React from 'react';

function TodoForm(props) {
  return (
    <form name="todoForm" onSubmit={props.addNewTodo}>
      <input
        type="text"
        value={props.task}
        placeholder="Enter Todo Item Here"
        name="todo"
        onChange={props.changeHandler}
      />
      <button onClick={props.addNewTodo}>Add Task</button>
      <button onClick={props.removeHandler}>Remove Task</button>
    </form>
  );
}

export default TodoForm;
