import {useState} from "react";
// components
import Input from "./components/Input";
import TodoList from "./components/TodoList";
//styles
import GlobalStyle from './styles';
import styled from 'styled-components';

function App() {
  // get todos from localstorage
  const storedTodos = JSON.parse(localStorage.getItem('todoItems'));

  // state
  const [todoItem, setTodoItem] = useState(storedTodos || []);

  return (
    <Container className="App">
      <GlobalStyle />
      <Input todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(2,0,36);
background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(65,65,140,1) 0%, rgba(0,121,145,1) 100%);
  /* background: #161f2e; */
`;

export default App;
