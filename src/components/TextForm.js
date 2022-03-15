import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase', 'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase', 'success')

  };
  const handleOnClear = () => {
    let newText = ``;
    setText(newText);
    props.showAlert('All Text Cleared', 'success')

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed Extra Spaces', 'success')

  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'dark' ? '#696969' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
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
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Min to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Something In The Above Text-box To Prewiew It here..'}</p>
      </div>
    </>
  );
}
