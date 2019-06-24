import React, { useState } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: true,
  continuous: true
};

let listening = options.autoStart;

let lastInterim = "";
let lastFinal = "";
let timeOut = null;
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
  const [content, setContent] = useState("");
  const transferAndReset = finalTranscript => {
    timeOut = null;
    setCount(count + 1);
    setContent(content + " " + finalTranscript);
    resetTranscript();
  };
  if (interimTranscript === "" && finalTranscript !== "") {
    // debouncedChange(transferAndReset);
    lastInterim = interimTranscript;
    lastFinal = finalTranscript;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => transferAndReset(finalTranscript), 200);
  }

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };
  const onClick = event => {
    console.log("click", event.target.selectionStart);
  };
  if (finalTranscript !== "") console.log(finalTranscript);
  return (
    <div className="container">
      <div className="editor">
        <p contentEditable suppressContentEditableWarning={true}>
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
