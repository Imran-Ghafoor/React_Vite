import { useState } from "react";

import "./App.css";

function App() {
  console.log("app Rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  });
  const multiplyValue = () => {
    // console.log("logged");
    setValue({
      value: 0,
    });
  };

  return (
    <>
      <h1>Main Value:{value.value}</h1>
      <button onClick={multiplyValue}>Click me</button>
    </>
  );
}

export default App;
