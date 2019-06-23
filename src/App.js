import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { hot } from "react-hot-loader";
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
// export default process.env.NODE_ENV === "development" ? finishHot(App) : App
export default App;
