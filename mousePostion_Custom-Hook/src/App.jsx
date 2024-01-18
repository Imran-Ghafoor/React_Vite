import "./App.css";
import useMousePosition from "./hook/useMousePosition";

function App() {
  const { x, y } = useMousePosition();
  console.log(`${x} <==> ${y}`);

  return (
    <>
      <div>
        <h1>React Custom-Hook</h1>
      </div>
    </>
  );
}

export default App;
