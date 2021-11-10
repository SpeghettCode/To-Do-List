import Todo from "./Todo";
import styled from 'styled-components';

const TodoList = ({todoItem, setTodoItem}) => {
    return (
        <ToDoList>
            {todoItem.map(todo => <Todo todo={todo} todoItem={todoItem} setTodoItem={setTodoItem} key={todo} />)}
        </ToDoList>
    );
}

const ToDoList = styled.div`
    width: 50%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export default TodoList;