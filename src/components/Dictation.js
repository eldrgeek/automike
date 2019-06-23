import React, { useState } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";
import debounce from "debounce";

const options = {
  autoStart: true,
  continuous: true
};

let listening = options.autoStart;

let lastInterim = "";
let lastFinal = "";
let debouncedChange = debounce((f, arg) => f(arg), 200);

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
  const [content, setContent] = useState("initial Content");
  const transferAndReset = () => {
    setCount(count + 1);
    setContent(content + " " + finalTranscript);
    resetTranscript();
  };
  if (interimTranscript !== lastInterim || finalTranscript !== lastFinal) {
    debouncedChange(transferAndReset);
    lastInterim = interimTranscript;
    lastFinal = finalTranscript;
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
        <p contentEditable>
          <span className="base">this is some content </span>

          <span>
            The question is: will grammarly fuck with this
            <br />
          </span>

          <span className="base">this is some content </span>
          <span className="interim">that is contentEditable</span>
          <span className="final">that is interim</span>
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
