import './App.css';
import SumbitFrom from './components/SumbitFrom/SumbitForm';
import SingleTodoTask from './components/SingleTodoTask/SingleTodoTask';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [taskllist, setTasklist] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000')
      .then((res)=>{
        console.log("Respuesta:", res.data)
        setTasklist(res.data);
      })
  }, []);

  console.log(taskllist);
  
  return (
    <div className="App">
      <section className='formBody'>
        <header className='form__header'>To do List</header>
        <SumbitFrom />
        <section>
          {taskllist.map((element)=>{
            return (
            <
              SingleTodoTask 
              key={element.id}
              id = {element.id}
              task = {element.task}
            />
            )
          })}
        </section>
      </section>
    </div>
  );
}

export default App;
