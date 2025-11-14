import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

function Todo({task, deleteTodo, editTodo, toggleComplete,}) {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div className="icons">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    );
}

export default Todo;
