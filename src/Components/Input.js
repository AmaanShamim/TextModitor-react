import React, { useState } from "react";

export default function Input(props) {
  const [text, setText] = useState("");

  const pasteText = () => {
    navigator.clipboard.readText().then((cliptext) => setText(cliptext));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const changeToUpCase = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("success","Changed to uppercase!")
  };

  const changeToLowCase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("success","Changed to lowercase!")
  };

  const clearText = () => {
    setText("");
    props.showAlert("success","Textarea cleared!")
  };

  const removeExSpace = () => {
    let rxSpaces = text.split(/[ ]+/);
    setText(rxSpaces.join(" "));
    props.showAlert("success","Removed extra spaces!")
  };

  const copyText = () => {
    var text = document.getElementById("myInput");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Copied to clipboard!")
  };

  return (
    <>
      <div className="container">
        <h1>
          Enter your text to edit or modify & analyze -
          <button onClick={pasteText} className="btn btn-primary my-2 mx-2">
            Paste
          </button>
        </h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#212529",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          value={text}
          className="form-control"
          placeholder="Enter text here"
          id="myInput"
          rows="8"
        ></textarea>
        <button disabled={text.length===0} onClick={changeToUpCase} className="btn btn-primary my-2 mx-1">
          Convert to UPPERCASE
        </button>
        <button disabled={text.length===0} onClick={changeToLowCase} className="btn btn-primary my-2 mx-1">
          Convert to lowercase
        </button>
        <button disabled={text.length===0} onClick={clearText} className="btn btn-primary my-2 mx-1">
          Clear text area
        </button>
        <button disabled={text.length===0} onClick={removeExSpace} className="btn btn-primary my-2 mx-1">
          Remove extra spaces
        </button>
        <button disabled={text.length===0} onClick={copyText} className="btn btn-primary my-2 mx-1">
          Copy Text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words, {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} minutes to read by an average person
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in text area to preview"}</p>
      </div>
    </>
  );
}
