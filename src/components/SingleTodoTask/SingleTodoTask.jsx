import "./SingleTodoTask.css";
import axios from "axios";
import check from "../../images/check-small-svgrepo-com.svg";
import edit from "../../images/write-svgrepo-com.svg";
import erase from "../../images/delete-1-svgrepo-com.svg";

const SingleTodoTask = ({
  id,
  task,
  setStyle,
  setIndividualId,
  checkStatus,
  checkAndEditCompletedTask,
  deleteTask
}) => {

  // permite cambiar la llave checked a flase o true 
  const handleCheckOnClick = () => {
    axios
      .put(`https://mkr-onboarding-final.onrender.com/api/tasks/`, {
        id: id,
        task: task,
        check: checkStatus,
      })
      .then((res) => {
        checkAndEditCompletedTask(res.data);
      }).catch((error) => {
        alert("No se pudo actualizar la tarea")
      });
  };

  // Renderiza el componente para editar una tarea
  const handleEditOnClick = () => {
    setIndividualId(id);
    setStyle("modalWindow");
  };

  // Permite borrar una tarea
  const handleDeleteOnClick = () => {
    axios.delete(`https://mkr-onboarding-final.onrender.com/api/tasks/${id}`)
    .then((res) => {
      deleteTask(res.data);
    }).catch((error) => {
      alert("No se pudo actualizar la tarea")
    });
  };

  return (
    <div className={`singleTodo ${checkStatus}`}>
      <p className="id">{id}</p>
      <input type="text" className="task" disabled value={task}></input>
      <div className="buttons">
        <picture
          onClick={handleCheckOnClick}
          className={`pictureCheck ${checkStatus}`}
        >
          <img src={check} alt="check" id="check" />
        </picture>
        <picture onClick={handleEditOnClick} className="pictureEdit">
          <img src={edit} alt="edit" id="edit" />
        </picture>
        <picture onClick={handleDeleteOnClick} className="pictureErase">
          <img src={erase} alt="delete" id="erase" />
        </picture>
      </div>
    </div>
  );
};

export default SingleTodoTask;
