// import './App.css';
import AllTodos from './components/todoComponents/AllTodos';
import AddTodo from './components/todoComponents/AddTodo';

function App() {

  const url = `http://localhost:4000`;
  return (
    <>
      <div>
        <h1>Your to-do list</h1>
        <AllTodos url={url} />
      </div>
      <AddTodo />
    </>
  );
}

export default App;

