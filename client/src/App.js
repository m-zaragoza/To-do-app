// import './App.css';
import AllTodos from './components/todoComponents/AllTodos';

function App() {

  const url = `http://localhost:4000`;
  return (

    <AllTodos url={url} />

  );
}

export default App;

