import React, { useState } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";
let init = () => {};

const options = {
  autoStart: true,
  continuous: true
};

let listening = options.autoStart;
let count = 0;
const Dictation = function({
  store,
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  listening,
  browserSupportsSpeechRecognition
}) {
  // const [count,setCount] = useState(0)
  count++;
  let onChange = event => {
    setCount(count + 1);
    console.log(count);
    // let statusArea = document.querySelector("#status");
    // console.log(event.target);

    // if (event.target && event.target.value) {
    //   console.log("value", event.target.value);
    //   statusArea.textContent = event.target.value;
    // }
  };
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
        <i
          onClick={toggleListening}
          className={"fa fa-microphone " + (listening ? "recording" : "")}
        />
        <p className="status" id="status" contentEditable="true">
          {" "}
          {count}{" "}
        </p>
      </div>
    </div>
  );
};

export default SpeechRecognition(options)(Dictation);
//export default Dictation;
