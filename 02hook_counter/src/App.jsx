import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5
  const addValue = () => {
    if (counter < 20) {
      // if value stop on 20

      // counter = counter + 1;

      setCounter(counter + 1);

      // setCounter((preCounter) => preCounter + 1);
      // setCounter((preCounter) => preCounter + 1);
      // setCounter((preCounter) => preCounter + 1);
      // setCounter((preCounter) => preCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <div>
      <h1>Hello Imran</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value:{counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter} </button>
      <footer>value {counter}:</footer>
    </div>
  );
}

export default App;
