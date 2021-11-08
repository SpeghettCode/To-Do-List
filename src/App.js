import {useState} from "react";
// components
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  // state
  const [todoItem, setTodoItem] = useState([]);

  console.log(localStorage.todoItems);
  return (
    <div className="App">
      <Input todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoList todoItem={todoItem} />
    </div>
  );
}

export default App;
