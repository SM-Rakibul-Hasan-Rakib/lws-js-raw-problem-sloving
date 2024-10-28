import React, { useState } from "react";

function NumberValidation() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const x = parseFloat(inputValue);
    if (isNaN(x) || x < 1 || x > 10) {
      setMessage("Input not valid");
    } else {
      setMessage("Input OK");
    }
  };

  return (
    <div>
      <h2>JavaScript Validation</h2>
      <p>Please input a number between 1 and 10:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <p>{message}</p>
    </div>
  );
}

export default NumberValidation;
