import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList'
import '../src/components/styles.scss'

const tasks = [
  {
    name: "feed mason",
    id: 0,
    completed: false,
  },

  {
    name: "feed yourself",
    id: 1,
    completed: false,
  },

  {
    name: "do coding homework",
    id: 2,
    completed: false,
  },
  {
    name: "roll",
    id: 3,
    completed: false,
  },
  {
    name: "find your lighter",
    id: 4,
    completed: false,
  }

]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super()
    this.state = {
      tasks: tasks
    }
  }

  toggleTask = (id) => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id) {
        return({
          ...task,
          completed: !task.completed,
        })
      }
      else{
        return task
      }
    })
    
    this.setState({
      tasks: newTask
    })
  }

  addTask = (taskName) => {
    this.setState({
    tasks: [
      ...this.state.tasks, {
        name: taskName,
        id: this.state.tasks.length,
        completed: false,
      }

    ]
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter
      (task => (!task.completed))
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Stuff to do before you... ya know🍃☁️ </h2>
        <ToDoForm addTask={this.addTask} />
        </div>
        <ToDoList clearCompleted={this.clearCompleted} toggleTask={this.toggleTask} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
