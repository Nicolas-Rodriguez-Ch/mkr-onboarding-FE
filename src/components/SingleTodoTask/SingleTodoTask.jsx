import './SingleTodoTask.css'
import { useState } from 'react';
const handleOnClick = ()=> {

}
const SingleTodoTask = ( { id, task }) =>{

    const [tarea, setTarea] = useState('');
    return(
        <div className='singleTodo'>    
            <p>{id}</p>
            <input type='text'>{task}</input> 
            <picture onClick={handleOnClick}><img src='../../images/check-small-svgrepo-com.svg' alt='checkbox'></img></picture>
            <picture><img src='../../images/check-small-svgrepo-com.svg' alt='edit'></img></picture>
            <picture><img src='../../images/check-small-svgrepo-com.svg' alt='delete'></img></picture>
        </div>
    )
}


export default SingleTodoTask