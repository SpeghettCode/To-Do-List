import React, {useState} from "react";
import Todo from "./Todo";

const TodoList = ({todoItem}) => {
    return (
        <div>
            {todoItem.map(item => <Todo item={item} />)}
        </div>
    );
}

export default TodoList;