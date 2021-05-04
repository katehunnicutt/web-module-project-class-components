import React from 'react'

class ToDoForm extends React.Component {
  //classs component has state through constructor which is depreceiated so whatever

  constructor() {
    super()

    this.state = {
      toDoInput: ""
    }
  }

  handleChanges = e => {
    //arrow function
    this.setState({
      toDoInput: e.target.value
    })
  }

  //submitttttt with a class
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.toDoInput)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        name="task"
        type="text"
        onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    )
  }
}

export default ToDoForm;