// your components will all go in this `component` directory.
import React from "react"
import Task from "./Todo"

// feel free to change this component.js into TodoList.js
const ToDoList = props => {

    const handleClick = e => {
        props.clearCompleted()
    }

    return(
        <div className="task-list">
            {props.tasks.map((task, index) => (
                <Task toggleTask={props.toggleTask} key={task.id} task={task}/>
    ))}
        <button className="completed-btn" onClick={handleClick}>
                Cross it ouut
        </button>
        </div>
        
    )
}

export default ToDoList;