import React, { useState} from 'react';


const Task = props => {
// const [task, setTask] = useState({
//     name: 'clean kitchen',
//     id: 3,
//     completed: false
// })

const handleClick = () => {
    props.toggleTask(props.task.id);
    console.log('please')
}
return (
    <div onClick={handleClick} className={`task${props.task.completed ? "completed" : ""}`}>
        <p>{props.task.name}</p>
    </div>
)
}

export default Task;