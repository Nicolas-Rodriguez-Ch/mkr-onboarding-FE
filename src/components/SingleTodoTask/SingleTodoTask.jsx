import "./SingleTodoTask.css";
import { useState } from "react";
import check from "../../images/check-small-svgrepo-com.svg";
import edit from "../../images/write-svgrepo-com.svg";
import erase from "../../images/delete-1-svgrepo-com.svg";

const handleOnClick = () => {};
const SingleTodoTask = ({ id, task }) => {
  const [tarea, setTarea] = useState("");

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
        <picture onClick={handleOnClick} className="pictureCheck">
          <img src={check} alt="check" id="check"></img>
        </picture>
        <picture className="pictureEdit">
          <img src={edit} alt="edit" id="edit"></img>
        </picture>
        <picture className="pictureErase">
          <img src={erase} alt="delete" id="erase"></img>
        </picture>
      </div>
    </div>
  );
};

export default SingleTodoTask;
