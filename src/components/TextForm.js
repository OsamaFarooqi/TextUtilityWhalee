import React, { useState } from "react";

export default function TextForm({ heading = "Enter heading here" }) {
  const [text, setText] = useState("Type text here 2");

  const handleUpCLick = () => {
    // console.log("Uppercase was clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change clicked");
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <h2>
          {heading} - {text}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
