// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styled from 'styled-components';

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
        // <div>
            <TodoContainer style={isChecked ? {opacity: 0.5, transform: 'scale(0.995)'} : {}}>
                <h2 style={isChecked ? {textDecoration: 'line-through'} : {}}>{todo}</h2>
                <ButtonDiv>
                    <button onClick={checkTodo}><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></button>
                </ButtonDiv>
            </TodoContainer>
        // </div>
    );
}

const TodoContainer = styled.div`
    width: 100%;
    margin: 1rem 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    transition: all 0.3s ease;
    
    h2 {
        color: #161f2e;
        font-size: 1.25rem;
        letter-spacing: 1px;
        padding-left: 1.5rem;
        transition: all 0.3s ease;
    }
`;

const ButtonDiv = styled.div`
    width: 17.5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: 0;
        width: 50%;
        height: 100%;
        padding: 1.25rem 1rem;
        font-size: 1rem;
        background: #161f2e;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:nth-of-type(1) {
        background: #2b2b2b;

        &:hover {
            background: #fff;
            color: #2b2b2b;
        }
    }

    button:nth-of-type(2) {
        background: #aa0000;

        &:hover {
            background: #fff;
            color: #aa0000;
        }
    }
`;

export default Todo;