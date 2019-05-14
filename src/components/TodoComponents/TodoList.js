// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const todos = [
  {
    task: 'Type in the input box below',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Click on "Add Todo" to add to your Todo List',
    id: Date.now(),
    completed: false
  },
  {
    task:
      'Click on an existing todo item, then select "Remove Todo" to delete that todo item',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Refresh the page to start over!',
    id: Date.now(),
    completed: false
  }
];

const defaultState = {
  //This will represent the defaultState for the ToDoList's state
  newTodos: todos,
  task: '',
  id: '',
  completed: ''
};

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }
  removeHandler = event => {
    //This will be the event handler used when you remove a task
  };
  todoHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: '',
      id: undefined,
      completed: false
    });
  };

  changeHandler = event => {
    //This will be the event handler used when you add a task
    console.log(event.target.value);
    this.setState({
      //This will be what updates the existing todoList items
      [event.target.name]: event.target.value
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
          {this.state.newTodos.map(todo => (
            <Todo todo={todo} />
          ))}
        </div>
        <TodoForm
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          lineThroughHandler={this.lineThroughHandler}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default TodoList;

//This is will be how the to do text input will be cleared after the button is clicked to add the todo
