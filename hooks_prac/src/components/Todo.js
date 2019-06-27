import React, {useState} from 'react';

const Todo = props => {
    // Here we are abstracting todoName and setTodoName from useState, now everytime we call todoName it will
    // show the todoName and everytime we setTodoName it will change todoname
    const [todoName, setTodoName] = useState('') 
    const [todoList, setTodoList] = useState([]) //

    // Here is a simple change handler, saying that when this is called, on every event (every letter typed)
    // it will set the todoName
    const inputChangeHandler = event => {
        setTodoName(event.target.value)
    }

    // Here is a simple add handler, saying that when it is invoked it will add the todoName to the list and then ser rodoName back to none (so someone else can type)
    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName))
        setTodoName("")
    }

    return(
        <React.Fragment>
            <input 
            placeholder="todo..."
            onChange={inputChangeHandler}
            value={todoName}
            />
            <button type="button" onClick={todoAddHandler}> 
                Add 
            </button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default Todo