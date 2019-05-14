import React from 'react';

function TodoForm(props) {
  return (
    <form name="todoForm" onSubmit={props.todoHandler}>
      <input
        type="text"
        value={props.task}
        placeholder="Enter Todo Item Here"
        name="todo Item"
        onChange={props.changeHandler}
      />
    </form>
  );
}

export default TodoForm;
