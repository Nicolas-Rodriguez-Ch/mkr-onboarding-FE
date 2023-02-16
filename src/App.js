import "./App.css";
import SumbitFrom from "./components/SumbitFrom/SumbitForm";
import SingleTodoTask from "./components/SingleTodoTask/SingleTodoTask";
import UpdateSingleTodo from "./components/UpdateSigleTodo/UpdateSingleTodo";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [taskList, setTasklist] = useState([]);
  const [style, setStyle] = useState("none");
  useEffect(() => {
    axios.get("http://localhost:8000/api/tasks").then((res) => {
      setTasklist(res.data);
    });
  }, []);

  console.log(taskList);

  return (
    <div className="App">
      <UpdateSingleTodo 
        style={style}
      />
      <section className="formBody">
        <header className="form__header">To-do List</header>
        <SumbitFrom />
        <section className="dataBase">
          {taskList.map((element) => {
            return (
              <SingleTodoTask
                key={element.id}
                id={element.id}
                task={element.task}
                setStyle = {setStyle}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default App;
