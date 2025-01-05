import { useState } from "react";

import "./App.css";
import Accordion from "./components/project01_Accordion/Accordion";
import RandomColor from "./components/project02_RandomColor/RandomColor";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordion />
      <RandomColor/>
    </>
  );
}

export default App;
