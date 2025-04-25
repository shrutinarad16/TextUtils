import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);      
    }
    const handleLowerClick = () => {
        console.log("Lowercase was clicked" + text);
        let LowerText = text.toLowerCase();
        setText(LowerText);      
    }
    const handleOnChange = (event) => {
        console.log("On Change"); 
        setText(event.target.value);     
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className = "container">   
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text} onChange={handleOnChange} id="myBox"
          rows="11"
        ></textarea>
      </div>
      <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-success mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>You will take {0.008 *text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
