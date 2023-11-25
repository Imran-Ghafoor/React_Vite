
import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className=" bg-gray-600 text-6xl p-4 font-bold">Redux Toolkit</h1>
      <h2 className=" bg-green-600 text-6xl font-serif">Todo APP</h2>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
