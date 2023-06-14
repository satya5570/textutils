import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked");
    if (text.length !== 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("text converted to uppercase", "success");
    } else {
      props.showAlert("text field is empty, please enter something", "warning");
    }
  };

  const handleLoClick = () => {
    // console.log("upper case was clicked");
    if (text.length !== 0) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("text converted to lowercase", "success");
    } else {
      props.showAlert("text field is empty, please enter something", "warning");
    }
  };

  const handleCopy = () => {
    if (text.length !== 0) {
      var ntext = document.getElementById("myBox");
      ntext.focus();

      ntext.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(ntext.value);
      props.showAlert("text Copied", "success");
    } else {
      props.showAlert(
        "text field is empty, please enter something for copy",
        "warning"
      );
    }
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleclear = (event) => {
    if (text.length !== 0) {
      let newText = "";
      setText(newText);
      props.showAlert("All text cleared", "success");
    } else {
      props.showAlert("text field is already empty", "warning");
    }
  };
  const handleTrim = (event) => {
    if (text.length !== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces trimed", "success");
    } else {
      props.showAlert("text field is already empty", "warning");
    }
  };

  const [text, setText] = useState("");
  //text="new text";  // wrong way  to change state
  //setText("new text");  //correct way to change state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>
          Clear
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-success mx-2" onClick={handleTrim}>
          Trim spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summery</h1>
        <p>
          {text.length === 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        {/* <p>{0.008 *text.split(" ").length} minutes read</p> */}
        <p>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter text to preview here"}</p>
      </div>
    </>
  );
}
