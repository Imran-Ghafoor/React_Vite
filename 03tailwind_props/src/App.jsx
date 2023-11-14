// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Hello Tailwind
      </h1>
      <Card
        username="Imran"
        btnText="Click me"
        paraText="HI, my self imran, im a enthuestic software developer"
      />
      <Card username="Khan" btnText="Visit me" />
    </>
  );
}

export default App;
