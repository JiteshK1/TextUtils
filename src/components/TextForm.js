import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClear = () => {
    let newText = ``;
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            id="textForm"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary  mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleOnClear}>
          Clear Text
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleExtraSpaces}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Min to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
