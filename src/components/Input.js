import React, {useState, useRef} from "react";
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Input = ({todoItem, setTodoItem}) => {
    const inputRef = useRef(null);

    // state
    const [inputText, setInputText] = useState();

    // event handlers
    const addNewTodo = () => {
        //update the state
        setTodoItem([...todoItem, inputText]);

        // push todos to localstorage
        const localStorageArray = [];
        localStorageArray.push(...todoItem, inputText);
        localStorage.setItem('todoItems', JSON.stringify(localStorageArray));

        //empty the inputs value
        inputRef.current.value = '';
    }

    return (
        <div>
            <input onChange={e => setInputText(e.target.value)} ref={inputRef} type="text" name="todo-input" className="todo-input" />
            <button onClick={addNewTodo} type="submit">{<FontAwesomeIcon icon={faPlus} />}</button>
        </div>
    );
}

export default Input;