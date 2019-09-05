import React, { useState, useEffect } from "react";
import "../css/dictation.css";
// import init from "../DictationController.js"
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: true,
  continuous: true
};

let startContainer = null;
let timeOut;
/*
`currentContent` and `insertPoint` are used 
to along with interimTrancript and finalTranscript
are used to determine 'displayedContent'.
If there is no `interrimTranscript` and there is a
`finalTranscript` then `currrentContent` and `insertPoint` are
both updated and `displayedContent` is the same as
`currentContent.` 

*/

const insertBreaks = string => {
  // return (<div>{string}</div>)
  return (
    <React.Fragment>
      {string.split("\n").map((e, index) => {
        if (index === 0) {
          return <React.Fragment key={index}>{e}</React.Fragment>;
        }
        return (
          <React.Fragment key={index}>
            <br />
            {e}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
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
  const [insertPoint, setInsertPoint] = useState(-1);
  const [currentContent, setCurrentContent] = useState(
    "this is the initial value \nline 2\nline3"
  );
  let leftBase, rightBase;
  if (insertPoint === -1) {
    leftBase = currentContent;
    // leftBase = currentContent;
    rightBase = "";
  } else {
    leftBase = currentContent.substr(0, insertPoint);
    rightBase = currentContent.substr(insertPoint);
  }

  useEffect(() => {
    if (interimTranscript === "" && finalTranscript !== "") {
      setCurrentContent(leftBase + " " + finalTranscript + " " + rightBase);
      resetTranscript();
      setCount(count + 1);
      if (insertPoint !== -1)
        setInsertPoint(insertPoint + 1 + finalTranscript.length);
    }
  }, [
    leftBase,
    rightBase,
    finalTranscript,
    resetTranscript,
    interimTranscript,
    count,
    insertPoint
  ]);

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };
  const onClick = event => {
    const sel = window.getSelection();
    const para = document.querySelector("#para");
    console.log(sel, sel.anchorNode, sel.focusOffset);
    window.xxx = sel;
    // sel.extend(para, 0);
    // setInsertPoint(sel.toString().length);
    // console.log(sel.toString().length, sel.toString());
    // range.setStartAfter(editor)

    //https://developer.mozilla.org/en-US/docs/Web/API/Selection/extend
    //https://developer.mozilla.org/en-US/docs/Web/API/Range
  };
  // if (finalTranscript !== "") console.log("final", finalTranscript);

  return (
    <div className="container">
      <div id="editor" className="editor">
        <p
          id="para"
          onClick={onClick}
          contentEditable
          suppressContentEditableWarning={true}
        >
          <span className="base">{insertBreaks(leftBase)}</span>
          <span className="final">{finalTranscript}</span>
          <span className="interim">{interimTranscript}</span>
          <span className="base">{insertBreaks(rightBase)} </span>
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
          {count} {insertPoint}
        </p>
      </div>
    </div>
  );
};

export default SpeechRecognition(options)(Dictation);
//export default Dictation;
