import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import '../src/components/styles.scss';


const tasks = [
  {
    name: 'clean the bathroom',
    id: 0,
    completed: false
  },
  {
    name: 'take out the trash',
    id: 1,
    completed: false
  },
  {
    name: 'organize the fridge',
    id: 2,
    completed: false
  },
  {
    name: 'sweep the floors',
    id: 3,
    completed: false
  },
  {
    name: 'make dinner',
    id: 4,
    completed: false
  },
  {
    name: 'walk mason',
    id: 5,
    completed: false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleTask = (id) => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        return( {
          ...task,
          completed: !task.completed
        
        });
      }
        else {
          return task
        }
    })

    this.setState({
      tasks:newTask
    })
  }
  
  addTask = (taskName) => {
    this.setState({
      tasks: [...this.state.tasks, {
        name: taskName,
        id: this.state.tasks.length,
        completed: false
      }]
    })
  }

  clearCompleted = e => {
    this.setState({
      tasks: this.state.tasks.filter
      (task => (!task.completed),
      console.log('go away'))
    })
  }


//updating state with class methods
  render() {
    return (
      <div className="App">
      <div className="header">
        <h2>To Do List</h2>
        <ToDoForm addTask={this.addTask}/>
      </div>

      <ToDoList clearCompleted={this.clearCompleted} toggleTask={this.toggleTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
