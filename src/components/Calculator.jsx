import React from "react";
import "./Calculator.css";
// import { Col, Container, Row } from "react-bootstrap";

const Calculator = () => {
  let array = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <center className="my-5 calculatorContainer ">
      <h2>Calculator</h2>
      <input className="display" type="text" />
      <div className="buttonContainer">
        {array.map((e) => (
          <button key={e}>{e}</button>
        ))}
      </div>
    </center>
  );
};

export default Calculator;
