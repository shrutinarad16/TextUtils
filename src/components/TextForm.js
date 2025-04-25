import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowerClick = () => {
    console.log("Lowercase was clicked" + text);
    let LowerText = text.toLowerCase();
    setText(LowerText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearText = () => {
    console.log("Clear Text was clicked");
    let clearText = text.replace(/./g, "");
    setText(clearText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I am copy");
    let text = document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    console.log("Extra spaces were clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : '#042743'}}
            id="myBox"
            rows="11"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2"style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>You will take {0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something Here to Preview"}</p>
      </div>
    </>
  );
}
