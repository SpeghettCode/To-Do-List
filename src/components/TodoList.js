import Todo from "./Todo";

const TodoList = ({todoItem, setTodoItem}) => {
    return (
        <div>
            {todoItem.map(todo => <Todo todo={todo} todoItem={todoItem} setTodoItem={setTodoItem} key={todo} />)}
        </div>
    );
}

export default TodoList;