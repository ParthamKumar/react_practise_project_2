import React, { useContext, useRef, useState } from "react";
import "./CalculatorData.css";
import ThemeContext from "../Context/theme";
function CalculatorData({ setRes }) {
  console.log("Calculator Data");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const theme = useContext(ThemeContext)

  const sign = useRef(null);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "num1") {
      setNum1(parseFloat(value));
    }
    if (name === "num2") {
      setNum2(parseFloat(value));
    }
  }
  function clear() {
    setNum1(0);
    setNum2(0);

    if (sign.current) {
      sign.current.value = " ";
    }
  }
  function setSign(value) {
    if (sign.current) {
      sign.current.value = value;
    }
  }

  function operation() {
    if (sign.current.value === "+") {
      setRes(num1 + num2);
    }
    if (sign.current.value === "-") {
      setRes(num1 - num2);
    }
    if (sign.current.value === "*") {
      setRes(num1 * num2);
    }
    if (sign.current.value === "/") {
      setRes(num1 / num2);
    }
  }

  return (
    <>
      <div className={`calculatorData ${theme}`}>
        <h2>Data</h2>
        <div className="input">
          <input
            type="number"
            placeholder="Num"
            name="num1"
            value={num1}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Sign"
            ref={sign}
            className="signInput"
            readOnly
          />
          <input
            type="number"
            placeholder="Num2"
            name="num2"
            value={num2}
            onChange={handleInputChange}
          />
        </div>
        <div className="operators">
          <button onClick={() => {setSign("+");operation() }}>Add</button>
          <button onClick={() => {setSign("-");operation() }}>Subtract</button>
          <button onClick={() => {setSign("*");operation() }}>Multiply</button>
          <button onClick={() => {setSign("/");operation() }}>Divide</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </>
  );
}
export default CalculatorData;
