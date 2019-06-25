import React, { useState } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: true,
  continuous: true
};

let startContainer = null;
let timeOut;
const Dictation = function({
  store,
  transcript,
  interimTranscript,
  finalTranscript,
  resetTranscript,
  startListening,
  stopListening,
  listening,
  browserSupportsSpeechRecognition
}) {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("this is the initial \n value");
  const transferAndReset = () => {
    const localCopy = finalTranscript;
    resetTranscript();

    timeOut = null;
    console.log(`local='${localCopy}'`);

    setCount(count + 1);
    setContent(content + "" + localCopy);
  };
  if (interimTranscript === "" && finalTranscript !== "") {
    // debouncedChange(transferAndReset);
    console.log("timeout is", timeOut);
    if (timeOut) {
      console.log("clear", timeOut);
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(transferAndReset, 1000);
    console.log("set", timeOut);
  }

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };
  const onClick = event => {
    console.log("click", event.target);
    const sel = window.getSelection();
    let range = window.getSelection().getRangeAt(0);
    console.log("start", range.startContainer);
    const para = document.querySelector("#para");

    sel.extend(para, 0);
    console.log(sel.toString());
    // range.setStartAfter(editor)

    //https://developer.mozilla.org/en-US/docs/Web/API/Selection/extend
    //https://developer.mozilla.org/en-US/docs/Web/API/Range
  };
  if (finalTranscript !== "") console.log(finalTranscript);

  return (
    <div className="container">
      <div id="editor" className="editor">
        <p
          id="para"
          onClick={onClick}
          contentEditable
          suppressContentEditableWarning={true}
        >
          <span className="base">{content} </span>
          <span className="interim">{finalTranscript}</span>
          <span className="final">{interimTranscript}</span>
          <span>
            <br />
            <br />
          </span>
        </p>
      </div>
      <div id="footer">
        <button id="start" onClick={stopListening}>
          Stop
        </button>
        S
        <button onClick={resetTranscript} id="stop">
          Reset
        </button>
        <i
          onClick={toggleListening}
          className={"fa fa-microphone " + (listening ? "recording" : "")}
        />
        <p className="status" id="status">
          {" "}
          {count}{" "}
        </p>
      </div>
    </div>
  );
};

export default SpeechRecognition(options)(Dictation);
//export default Dictation;
