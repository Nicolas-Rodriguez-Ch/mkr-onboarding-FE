import "./App.css";
import SumbitFrom from "./components/SumbitFrom/SumbitForm";
import SingleTodoTask from "./components/SingleTodoTask/SingleTodoTask";
import UpdateSingleTodo from "./components/UpdateSigleTodo/UpdateSingleTodo";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [taskList, setTasklist] = useState([]);
  const [style, setStyle] = useState("none");
  const [individualId, setIndividualId] = useState(0);

  // Trae la información de la base de datos
  useEffect(() => {
    axios.get("https://mkr-onboarding-final.onrender.com/api/tasks/").then((res) => {
      setTasklist(res.data);
    });
  }, []);

  // Crea una nueva tarea
  const createNewTask = (e)=> {
    const arr = [...taskList, e];
    setTasklist(arr);
  }

  // marca como completada una tarea
  const checkAndEditCompletedTask = (e) =>{
    const arr = [...taskList];
    const index = arr.findIndex((element)=> element.id === e.id);
    arr[index] = e;
    setStyle('none');
    setTasklist(arr);
  }
  
  // borra una tarea 
  const deleteTask = (e)=> {
    const arr = [...taskList];
    const filteredArr =arr.filter((element)=> element.id !== e.id);
    setTasklist(filteredArr);
  }

  return (
    <div className="App">
      <UpdateSingleTodo
        checkAndEditCompletedTask ={checkAndEditCompletedTask}
        style={style}
        individualId={individualId}
        setStyle={setStyle}
      />
      <section className="formBody">
        <header className="form__header">To-do List</header>
        <SumbitFrom 
          createNewTask={createNewTask}
        />
        <section className="dataBase">
          {taskList.map((element) => {
            return (
              <SingleTodoTask
                key={element.id}
                id={element.id}
                task={element.task}
                checkStatus={element.check}
                setStyle={setStyle}
                setIndividualId={setIndividualId}
                checkAndEditCompletedTask={checkAndEditCompletedTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default App;
