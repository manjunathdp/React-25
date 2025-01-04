import { useState } from "react";
import "./data";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  function handelSelection(id) {
    if (id === selected) {
      setSelected(null);
    } else setSelected(id);
  }
  return (
    <div>
      {data.map((dataItem) => (
        <div>
          <div onClick={() => handelSelection(dataItem.id)}>
            <h3>{dataItem.question}</h3>
          </div>
          <div>
            {selected === dataItem.id ? (
              <p>{dataItem.answer}</p>
            ) : (
              <p>{null}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
