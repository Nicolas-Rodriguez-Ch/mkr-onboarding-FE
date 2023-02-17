import "./SumbitFrom.css";

import { useState } from "react";
import axios from "axios";


const SumbitFrom = () => {
  const [submittedTask, setSubmittedTask] = useState('');

  // Permite crear una tarea y mandarla a la bd
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://mkr-onboarding-final.onrender.com/api/tasks', {
      task: submittedTask
    }).then((res) => {
      if(res.status === 202) return window.location.reload();
    })
  };
  
  return (
    <form>
      <input 
        type="text" 
        className="text" 
        value={submittedTask}
        onChange={(event)=>setSubmittedTask(event.target.value)}
      >
      </input>
      <button 
        type="sumbit" 
        className="add__button" 
        onClick={handleSubmit}
      >
        {" "}
        <b>+</b> Agregar
      </button>
    </form>
  );
};

export default SumbitFrom;
