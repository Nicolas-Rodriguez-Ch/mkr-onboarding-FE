import "./UpdateSingleTodo.css"


const UpdateSingleTodo = (props) => {

    const handleUpdateClick = ()=> {}
    return(
        <div className={props.style}>
            <input 
                className="update__modal"
                type="text"
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