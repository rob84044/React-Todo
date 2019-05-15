import React from 'react';
import Todo from './Todo';

const Test = props => {
  return (
    <div>
      {props.newTodos.map(task => (
        <Todo
          lineThroughHandler={props.lineThroughHandler}
          key={task.id}
          todo={task}
        />
      ))}
    </div>
  );
};

export default Test;
