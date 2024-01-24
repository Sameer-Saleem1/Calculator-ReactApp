import React from "react";

const Display = ({ value }) => {
  return (
    <>
      <h2>Calculator</h2>
      <input className="display" type="text" value={value} readOnly />
    </>
  );
};

export default Display;
