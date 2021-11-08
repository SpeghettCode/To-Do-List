import React, {useState} from "react";
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// uuid
import { uuid } from 'uuidv4';

const Input = ({todoItem, setTodoItem}) => {
    // state
    const [inputText, setInputText] = useState();

    // event handlers
    const addNewTodo = () => {
        setTodoItem([...todoItem, inputText]);

        localStorage.setItem('todoItems', todoItem);
    }

    return (
        <div>
                <input onChange={e => setInputText(e.target.value)} type="text" name="todo-input" className="todo-input" />
                <button onClick={addNewTodo} type="submit">{<FontAwesomeIcon icon={faPlus} />}</button>
        </div>
    );
}

export default Input;