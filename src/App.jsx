import { useState } from "react";

import "./App.css";
import Accordion from "./components/project01_Accordion/Accordion";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordion />
    </>
  );
}

export default App;
