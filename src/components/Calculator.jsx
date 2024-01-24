import React from "react";
import "./Calculator.css";
// import { Col, Container, Row } from "react-bootstrap";

const Calculator = (props) => {
  return <center className="my-5 calculatorContainer">{props.children}</center>;
};

export default Calculator;
