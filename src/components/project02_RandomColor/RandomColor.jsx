import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");
  function randomNumberGenerator(length) {
    return Math.floor(Math.random() * length);
  }
  function handelHexColor() {
    console.log(colorType);
    let hexColor = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    for (let index = 0; index < 6; index++) {
      hexColor += hex[randomNumberGenerator(hex.length)];
    }
    setColor(hexColor);
  }
  function handelRgbColor() {
    console.log(colorType);
    let r = randomNumberGenerator(255);
    let g = randomNumberGenerator(255);
    let b = randomNumberGenerator(255);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if (colorType==='rgb') {
        handelRgbColor();
    } else {
        handelHexColor();
    }
  },[colorType])

  return (
    <div>
      <button onClick={() => setColorType("hex")}>Hex Color Mode</button>
      <button onClick={() => setColorType("rgb")}>RGB Color Mode</button>
      <button
        onClick={
          colorType === "hex" ? () => handelHexColor() : () => handelRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          height: "400px",
          width: "400px",
          background: color,
        }}
      >
        <div
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            fontSize: "20px",
            flexDirection: "column",
          }}
        >
          <h1>{colorType}</h1>
          <h3>{color}</h3>
        </div>
      </div>
    </div>
  );
}
