import React from 'react'
import "../css/dictation.css"
// import init from "../DictationController.js"
let init = () => {}

let onChange = (event) => {
    let statusArea = document.querySelector('#status')
    console.log(event.target,event);
    if(event.target && event.target.value) {
    console.log("value", event.target.value)
    statusArea.textContent = event.target.value;
    }
}
const Dictation = function(props) {
    let initStore = () => {init(props.store)}
    return <div className="container">
    Stuff at the top
        <div className="text-box" id="text" >

            <textarea className="textarea" id="textarea" onChange={onChange} />

        </div>
        <div id="footer">
            <button id="start" onClick={initStore}>Starting</button>
            <button id="stop">Stop</button>
            <i className="fa fa-microphone"></i>
            <p className="status" id="status" contentEditable="true" />
        </div>
    </div>
}
export default Dictation;