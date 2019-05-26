import React from 'react'
import "../css/dictation.css"
// import init from "../DictationController.js"
let init = () => {}
const Dictation = function(props) {
    let initStore = () => {init(props.store)}
    return <div className="container">
    Stuff at the top
        <div className="text-box" id="text" >

            <textarea className="textarea" id="textarea" />

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