// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Todo = ({todo, setTodoItem}) => {

    const deleteTodo = () => {
        //remove from localstorage
        const storage = JSON.parse(localStorage.getItem('todoItems'));
        
        const index = storage.indexOf(todo);
        storage.splice(index, 1);
        
        localStorage.setItem('todoItems', JSON.stringify(storage));


        //remove from state
        setTodoItem(storage);
    }


    
    const [isChecked, setIsChecked] = useState(false);

    const checkTodo = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <div>
                <h2 style={isChecked ? {textDecoration: 'line-through'} : {}}>{todo}</h2>
                <button onClick={checkTodo}><FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
}

export default Todo;