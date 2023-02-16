import "./UpdateSingleTodo.css"
import { useState } from "react"
import axios from "axios";

const UpdateSingleTodo = (props) => {

    const [updatedTask, setUpdatedTask] = useState('')

    const handleUpdateClick = ()=> {
        axios.put(`http://localhost:8000/api/tasks/${props.individualId}`, {
            task: updatedTask
        }).then((res) => {
            if(res.status === 202) return window.location.reload();
        });
    }
    return(
        <div className={props.style}>
            <input 
                className="update__modal"
                type="text"
                value={updatedTask}
                onChange={(event)=>{setUpdatedTask(event.target.value)}}
            >
            </input>
            <button 
                className="update__button"
                onClick={handleUpdateClick}
            >
                update
            </button>
        </div>
    )
}

export default UpdateSingleTodo;