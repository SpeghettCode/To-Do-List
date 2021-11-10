import React, {useState, useRef} from "react";
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
        <InputContainer>
            <StyledInput onChange={e => setInputText(e.target.value)} ref={inputRef} type="text" name="todo-input" className="todo-input" autoComplete="off" />
            <StyledButton onClick={addNewTodo} type="submit">{<FontAwesomeIcon icon={faPlus} />}</StyledButton>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    margin-bottom: 3rem;
    width: 35%;
    height: 5%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    width: 90%;
    height: 100%;
    outline: none;
    border: 0;
    font-size: 1.25rem;
    padding: 0.5rem 0 0.5rem 1rem;
    margin-right: 0.5rem;
`;

const StyledButton = styled.button`
    width: 10%;
    font-size: 1.25rem;
    padding: 0.25rem 0;
    margin: 0.25rem 0.5rem;
    border-radius: 10px;
    border: none;
    background: #12698F;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #fff;
        color: #12698F;
    }
`;

export default Input;