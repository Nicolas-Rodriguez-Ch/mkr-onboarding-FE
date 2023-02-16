import "./SingleTodoTask.css";
import { useState } from "react";
import axios from "axios";
import check from "../../images/check-small-svgrepo-com.svg";
import edit from "../../images/write-svgrepo-com.svg";
import erase from "../../images/delete-1-svgrepo-com.svg";

const SingleTodoTask = ({ id, task, setStyle }) => {
  const [tarea, setTarea] = useState("");

  const handleCheckOnClick = () => { console.log('click')};

  const handleEditOnClick = ()=> {
    setStyle('');
  }

  const handleDeleteOnClick = ()=> {
    axios.delete(`http://localhost:8000/api/tasks/${id}`)
    .then((res) => {
      if(res.status === 202) return window.location.reload();
    })
  }

  return (
    <div className="singleTodo">
      <p className="id">{id}</p>
        <input 
            type="text" 
            className="task" 
            disabled 
            value={task}
            >
        </input>
    <div className="buttons">
        <picture 
          onClick={handleCheckOnClick} 
          className="pictureCheck"
        >
          <img 
            src={check} 
            alt="check" 
            id="check"
          />
        </picture>
        <picture 
          onClick={handleEditOnClick}
          className="pictureEdit">
          <img 
            src={edit} 
            alt="edit" 
            id="edit"
          />
        </picture>
        <picture 
          onClick={handleDeleteOnClick}
          className="pictureErase">
          <img 
            src={erase} 
            alt="delete" 
            id="erase"
          />
        </picture>
      </div>
    </div>
  );
};

export default SingleTodoTask;
