import React from "react";


class ToDoForm extends React.Component {
    //constructor with state
    constructor() {
        //depreciated
        super();

        this.state = {
            input:""
        }
    }


    handleChanges = e => {
        //updates state with each letter
        this.setState({
            input: e.target.value
        });
    }

    //class property that submits form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type="text" name="task" />
                <button>Add Task</button>
            </form>
        )
    }
}

export default ToDoForm;