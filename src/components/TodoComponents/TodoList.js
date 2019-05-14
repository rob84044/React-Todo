// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const todoArray = [
  {
    task: 'Type in the input box below',
    id: Date.now(),
    completed: false
  }
];

const defaultState = {
  //This will represent the defaultState for the ToDoList's state
  task: '',
  id: undefined,
  completed: false
};

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }
  removeHandler = event => {
    //This will be the event handler used when you remove a task
  };
  addHandler = event => {
    //This will be the event handler used when you add a task
    this.setState({
      //This will be what updates the existing todoList items
    });
  };
  lineThroughHandler = event => {
    //This will be the event handler used when you click on an already existing event listener
    this.setState({
      //This will be what marks an existing item as a line through item
    });
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div className="pre-existing">
          {this.state.todoArray.map(todo => (
            <Todo todo={todo} />
          ))}
        </div>
        <TodoForm
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          lineThroughHandler={this.lineThroughHandler}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default TodoList;

//This is will be how the to do text input will be cleared after the button is clicked to add the todo
