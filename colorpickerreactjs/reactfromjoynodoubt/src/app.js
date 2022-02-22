import "./styles.css";
import React, { useState } from "react";

function App() {
  const colorArr = [
    "pink",
    "purple",
    "blue",
    "green",
    "yellow",
    "orange",
    "red"
  ];

  const [inputColor, setColor] = useState("");
  const getColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
    console.log("our color", inputColor);
  };

  let listColor;
  if (inputColor === "") {
    listColor = colorArr.map((color) => {
      return (
        <div>
          {/* <h1>{color}</h1> */}
          <div
            class="box"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color,
              width: "100px",
              height: "100px"
            }}
          />
        </div>
      );
    });
  } else {
    listColor = (
      <div class="container">
        <div
          class="box"
          style={{
            backgroundColor: inputColor,
            width: "100px",
            height: "100px"
          }}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Pick a color!</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label>
          Enter Color:
          <input type="text" name="color" onChange={getColor} />
        </label>
      </form>
      <br></br>
      <div class="container">{listColor}</div>
    </div>
  );
}

export default App;
