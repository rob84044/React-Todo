// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Test from './Test';

const todos = [
  {
    task: 'Type in the input box below',
    id: Date.now() + 1,
    completed: false
  },
  {
    task: 'Click on "Add Todo" to add to your Todo List',
    id: Date.now() + 2,
    completed: false
  },
  {
    task:
      'Click on an existing todo item, then select "Remove Todo" to delete that todo item',
    id: Date.now() + 3,
    completed: false
  },
  {
    task: 'Refresh the page to start over!',
    id: Date.now() + 4,
    completed: false
  }
];

const defaultState = {
  //This will represent the defaultState for the ToDoList's state
  newTodos: todos,
  task: ''
};

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }
  removeHandler = event => {
    event.preventDefault();

    let newTodos = this.state.newTodos.filter(todo => !todo.completed);
    this.setState({ newTodos });
  };
  addNewTodo = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      newTodos: [...this.state.newTodos, newTodo],
      task: ''
    });
  };

  changeHandler = event => {
    //This will be the event handler used when you add a task
    console.log(event.target.value);
    this.setState({
      //This will be what updates the existing todoList items
      task: event.target.value
    });
  };

  lineThroughHandler = id => {
    let newTodos = this.state.newTodos.slice();
    newTodos = newTodos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ newTodos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div className="pre-existing">
          <Test
            newTodos={this.state.newTodos}
            lineThroughHandler={this.lineThroughHandler}
          />
        </div>
        <TodoForm
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          task={this.state.task}
          removeHandler={this.removeHandler}
        />
      </div>
    );
  }
}

export default TodoList;

//This is will be how the to do text input will be cleared after the button is clicked to add the todo
