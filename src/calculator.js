import React from "react";
import { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [operand, setOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [screen, setScreen] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    if (screen.includes(".") && value === ".") {
      return;
    }
    if (operator === "") {
      setOperand((operand) => operand + value);
      setScreen((operand) => operand + value);
    } else {
      // definitely an operator
      if (operand2 === "") {
        setScreen("");
      }
      setOperand2((operand2) => operand2 + value);
      setScreen((operand2) => operand2 + value);
    }
  };

  const convertString = (str) => {
    if (str.includes(".")) {
      return parseFloat(str);
    } else {
      return parseInt(str);
    }
  };

  const handleEquals = () => {
    const parsed1 = convertString(operand);
    const parsed2 = convertString(operand2);
    let result = "";
    switch (operator) {
      case "+":
        result = parsed1 + parsed2;

        break;
      case "-":
        result = parsed1 - parsed2;
        break;
      case "*":
        result = parsed1 * parsed2;
        break;
      case "/":
        result = parsed1 / parsed2;
        break;
      case "%":
        result = parsed1 / 100 ;
        break;
    }

    setOperand(result.toString());

    setScreen(result.toString());
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    setOperator(value);
    setOperand2("");
  }

  const Reset = () => {
    setOperand("");
    setScreen("");
    setOperator("");
  };

  const Backspace = () => {
    if (screen.length > 0) {
      setScreen((op) => op.slice(0, -1));
      if (operator === "") {
        setOperand((op) => op.slice(0, -1));
      } else {
        setOperand2((op) => op.slice(0, -1));
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen"> {screen} </div>

        <button className="button gray-btn" value="C" onClick={Reset}>
          C
        </button>
        <button className="button gray-btn" value="%" onClick={handleOperator}>
          {" "}
          %
        </button>
        <button className="button gray-btn" value="Del" onClick={Backspace}>
          Del
        </button>

        <button
          className="button orange-btn"
          value="/"
          onClick={handleOperator}
        >
          /
        </button>
        <button className="button gray-btn" value="7" onClick={handleOperand}>
          7
        </button>
        <button className="button gray-btn" value="8" onClick={handleOperand}>
          8
        </button>
        <button className="button gray-btn" value="9" onClick={handleOperand}>
          9
        </button>

        <button
          className="button orange-btn"
          value="-"
          onClick={handleOperator}
        >
          -
        </button>
        <button className="button gray-btn" value="4" onClick={handleOperand}>
          4
        </button>
        <button className="button gray-btn" value="5" onClick={handleOperand}>
          5
        </button>
        <button className="button gray-btn" value="6" onClick={handleOperand}>
          6
        </button>

        <button
          className="button orange-btn"
          value="*"
          onClick={handleOperator}
        >
          *
        </button>
        <button className="button gray-btn" value="1" onClick={handleOperand}>
          1
        </button>
        <button className="button gray-btn" value="2" onClick={handleOperand}>
          2
        </button>
        <button className="button gray-btn" value="3" onClick={handleOperand}>
          3
        </button>

        <button
          className="button orange-btn"
          value="+"
          onClick={handleOperator}
        >
          +
        </button>
        <button className="button zero" value="0" onClick={handleOperand}>
          0
        </button>
        <button className="button gray-btn" value="." onClick={handleOperand}>
          .
        </button>
        <button className="button orange-btn" value="=" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}
