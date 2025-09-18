import React, { useState } from "react";

export default function TextForm({ heading = "Enter heading here" }) {
  const [text, setText] = useState("Type text here 2");

  const handleUpCLick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCLick = () => {
    const newText = text.toLowerCase();
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    // console.log("On change clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{heading}</h2>
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
        <button className="btn btn-primary mx-2" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoCLick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.0008 * text.split(" ").length} minutes to read</p>
        <h2>Preview text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
