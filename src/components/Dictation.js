import React, { useState } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";
import debounce from "debounce";
let init = () => {};

const options = {
  autoStart: true,
  continuous: true
};

let listening = options.autoStart;
let count = 0;
let lastInterim = "";
let lastFinal = "";
let debouncedChange = debounce((f, arg) => f(arg), 200);
let initialText = `
You can pass a Quill Delta, instead of an HTML string, as the value and defaultValue properties. Deltas have a number of advantages over HTML strings, so you might want use them instead. Be aware, however, that comparing Deltas for changes is more expensive than comparing HTML strings, so it might be worth to profile your usage patterns.

Note that switching value from an HTML string to a Delta, or vice-versa, will trigger a change, regardless of whether they represent the same document, so you might want to stick to a format and keep using it consistently throughout.

⚠️ Do not use the delta object you receive from the onChange event as value. This object does not contain the full document, but only the last modifications, and doing so will most likely trigger an infinite loop where the same changes are applied over and over again. Use editor.getContents() during the event to obtain a Delta of the full document instead. ReactQuill will prevent you from making such a mistake, however if you are absolutely sure that this is what you want, you can pass the object through new Delta() again to un-taint it.

`;
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
  const [initialText, setInitialText] = useState("init");

  if (interimTranscript !== lastInterim || finalTranscript !== lastFinal) {
    debouncedChange(setCount, count + 1);
    lastInterim = interimTranscript;
    lastFinal = finalTranscript;
  }

  let onChange = event => {
    setCount(count + 1);
    // setInitialText(content)

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
      <div className="text-box" id="text">
        <textarea
          className="textarea"
          id="textarea"
          onClick={onTextClick}
          onChange={onChange}
          value={"this" + finalTranscript + " " + interimTranscript + "that"}
        />
      </div>
      <div className="text-box1" id="text">
        <textarea
          className="textarea"
          id="textarea"
          onClick={onTextClick}
          onChange={onChange}
          value={"this" + finalTranscript + " " + interimTranscript + "that"}
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
