// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    if (num === "") {
      setResult("Please enter a number");
    } else if (num % 2 === 0) {
      setResult("Even Number");
    } else {
      setResult("Odd Number");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Even or Odd Number Checker</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <br /><br />

      <button onClick={checkNumber}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;