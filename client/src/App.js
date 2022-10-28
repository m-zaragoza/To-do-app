// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from './components/todoComponents/AddTodo';
import EditTodo from './components/todoComponents/EditTodo';
import Filter from './components/todoComponents/Filter';
import Register from './components/userComponents/Register';

function App() {

  const url = `http://localhost:4000`;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Filter url={url} />} />
        <Route path="/add" element={<AddTodo url={url} />} />
        <Route path="/edit/:_id" element={<EditTodo url={url} />} />
        <Route path="/register" element={<Register url={url} />} />
      </Routes>
    </Router>
  );
};

export default App;

