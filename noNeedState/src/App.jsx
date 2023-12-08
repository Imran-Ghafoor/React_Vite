import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  // do not need to use this state
  // const [multiplyValue, setMultiplyValue] = useState(1);

  // we update with this variable use only
  // react reRender the component
  let multiplyValue = value * 5;
  const multiplybyfive = () => {
    // setMultiplyValue(value * 5);
    setValue(value + 1);
  };
  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplybyfive}>Multiply to the 5</button>
      <h2>Multiplied Value:{multiplyValue}</h2>
    </>
  );
}

export default App;
