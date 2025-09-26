import React, { useState } from "react";

export default function TextForm({
  heading = "Enter heading here",
  mode = "light",
  showAlert,
}) {
  const [text, setText] = useState("");
  const [totalWords, setTotalWords] = useState(0);

  const handleUpCLick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase!", "success");
  };

  const handleLoCLick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase!", "success");
  };

  const handleClearCLick = () => {
    const newText = "";
    setText(newText);
    showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    handleWordCount(event.target.value);
  };

  const handleWordCount = (newText) => {
    console.log("text:" + newText + ";");
    let trimedText = newText.trim();
    console.log("trimedText:" + trimedText + ";");
    if (trimedText.length === 0) {
      setTotalWords(0);
    } else {
      setTotalWords(trimedText.split(/\s+/).length);
    }
  };

  return (
    <>
      <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
        <h2>{heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: mode === "light" ? "white" : "#13466e",
              color: mode === "light" ? "black" : "white",
            }}
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
        <button className="btn btn-primary mx-2" onClick={handleClearCLick}>
          Clear Text
        </button>
      </div>
      <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
        <h2>Your text summary</h2>
        <p>
          {totalWords} words and {text.length} characters
        </p>
        <p>{0.0008 * text.split(" ").length} minutes to read</p>
        <h2>Preview text</h2>
        <p>{text.length > 0 ? text : "Please enter text above to preview"}</p>
      </div>
    </>
  );
}
