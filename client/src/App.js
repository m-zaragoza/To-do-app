// import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllTodos from './components/todoComponents/AllTodos';
import AddTodo from './components/todoComponents/AddTodo';

function App() {

  const url = `http://localhost:4000`;

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await axios.get(url);
    return res.data;
  };

  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos());
    }
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Your to-do list</h1>
        <AllTodos todos={todos} />
      </div>
      <AddTodo url={url} />
    </>
  );
}

export default App;

