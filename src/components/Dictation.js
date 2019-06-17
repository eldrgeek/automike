import React from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";
let init = () => {};

let onChange = event => {
  let statusArea = document.querySelector("#status");
  console.log(event.target);

  if (event.target && event.target.value) {
    console.log("value", event.target.value);
    statusArea.textContent = event.target.value;
  }
};

const options = {
  autoStart: true,
  continuous: true
};

let listening = options.autoStart;

const Dictation = function({
  store,
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition
}) {
  let initStore = () => {
    init(store);
  };
  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
    listening = !listening;
  };
  const onTextClick = event => {
    console.log("click", event.target.selectionStart);
  };
  //console.log(transcript)
  return (
    <div className="container">
      Stuff at the top if (transcript) console.log(transcript)
      <div className="text-box" id="text">
        <textarea
          className="textarea"
          id="textarea"
          onClick={onTextClick}
          onChange={onChange}
          value={"this" + transcript + "that"}
        />
      </div>
      <div id="footer">
        <button id="start" onClick={stopListening}>
          Stop
        </button>
        <button onClick={resetTranscript} id="stop">
          Reset
        </button>
        <i onClick={toggleListening} className="fa fa-microphone" />
        <p className="status" id="status" contentEditable="true" />
      </div>
    </div>
  );
};

export default SpeechRecognition(options)(Dictation);
//export default Dictation;
