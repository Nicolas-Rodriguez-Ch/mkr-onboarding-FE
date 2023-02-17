import "./UpdateSingleTodo.css";
import { useState } from "react";
import axios from "axios";
import greenCheck from "../../images/check-circle-svgrepo-com.svg";
import redButton from "../../images/cancel-svgrepo-com.svg";

const UpdateSingleTodo = (props) => {
  const [updatedTask, setUpdatedTask] = useState("");

  const handleUpdateClick = () => {
    
    // Permite editar el task de una tarea en la bd
    axios.put(`https://mkr-onboarding-final.onrender.com/api/tasks/${props.individualId}`, {
        task: updatedTask,
      })
      .then((res) => {
        props.checkAndEditCompletedTask(res.data);
        setUpdatedTask('');
        // actualizar el estado de la tarea
      }).catch((error) => {
        alert("No se pudo actualizar la tarea")
      });
  };

  // Oculta el componente para editar tareas
  const handleCancelClick = () => {
    props.setStyle("none");
  };

  return (
    <div className={props.style}>
      <div className="modalCard">
        <h1>¿Cual es tu tarea?</h1>
        <input
          className="update__modal"
          type="text"
          value={updatedTask}
          onChange={(event) => {
            setUpdatedTask(event.target.value);
          }}
        ></input>
        <div className="modalButtons">
          <img
            src={greenCheck}
            alt=""
            className="update__button"
            onClick={handleUpdateClick}
          />
          <img
            src={redButton}
            alt=""
            className="rejectButton"
            onClick={handleCancelClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSingleTodo;
