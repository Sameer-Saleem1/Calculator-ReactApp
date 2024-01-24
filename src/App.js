import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const ButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };

  return (
    <Calculator>
      <Display value={calVal} />
      <Buttons onButtonClick={ButtonClicked} />
    </Calculator>
  );
}

export default App;
