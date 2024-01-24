import React from "react";

const Buttons = ({ onButtonClick }) => {
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
    <div className="buttonContainer">
      {array.map((e) => (
        <button onClick={() => onButtonClick(e)} key={e}>
          {e}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
