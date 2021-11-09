import {useState} from "react";
// components
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  // get todos from localstorage
  const storedTodos = JSON.parse(localStorage.getItem('todoItems'));

  // state
  const [todoItem, setTodoItem] = useState(storedTodos || []);

  return (
    <div className="App">
      <Input todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
    </div>
  );
}

export default App;
