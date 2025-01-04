import { useState } from "react";
import "./data";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselect, setEnableMultiselect] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handelSingleSelection(id) {
    if (id === selected) {
      setSelected(null);
    } else setSelected(id);
  }

  function handelMultipleSelection(id) {
    let copyMultiple = [...multiple];
    const currentIndex = copyMultiple.indexOf(id);

    console.log(currentIndex);
    if (currentIndex === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(currentIndex, 1);
    }
    setMultiple(copyMultiple);
  }
  console.log("multiple: ", multiple);
  return (
    <div>
      <button onClick={() => setEnableMultiselect(!enableMultiselect)}>
        Enable Multi Selection
      </button>
      {data.map((dataItem) => (
        <div>
          <div
            onClick={
              enableMultiselect
                ? () => handelMultipleSelection(dataItem.id)
                : () => handelSingleSelection(dataItem.id)
            }
          >
            <h3>{dataItem.question}</h3>
          </div>
          <div>
            {selected === dataItem.id ||
            multiple.indexOf(dataItem.id) !== -1 ? (
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
