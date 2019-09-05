import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Dictation from "./components/Dictation";
// const finishHot = hot(module); // const AutoButton = (props) => {

function App() {
  return (
    <React.Fragment>
      {/* <QuillTest /> */}
      <Dictation />
    </React.Fragment>
  );
}
console.log("node env", process.env.NODE_ENV);
export default App;
