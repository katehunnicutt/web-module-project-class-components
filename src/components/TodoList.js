import React from "react";
import Task from "../components/Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const ToDoList = props => {

    const handleClick = () => {
        props.clearCompleted();
        console.log("go now")
    }

    return (
        <div className="task-list">
            {props.tasks.map((task, index) => (
                 <Task toggleTask={props.toggleTask} key={task.id} task={task} />
            ))}

            <button onClick={handleClick}
            className="completed-btn">
                Mark as Complete
            </button>
        </div>
    )
}
export default ToDoList