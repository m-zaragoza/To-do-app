// import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AllTodos from './components/todoComponents/AllTodos';
import AddTodo from './components/todoComponents/AddTodo';
import EditTodo from './components/todoComponents/EditTodo';

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
    <Router>
      <Routes>
        <Route path="/" element={<>
          <div>
            <h1>Your to-do list</h1>
            <AllTodos todos={todos} />
          </div>
        </>} />
        <Route path="/add" element={<AddTodo url={url} />} />
        <Route path="/edit/:_id" element={<EditTodo url={url} />} />
      </Routes>
    </Router>
  );
};

export default App;

