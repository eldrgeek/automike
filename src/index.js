import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";


import RootContainer from "./App";
const render = Component => {
  ReactDOM.render(
    // <AppContainer>
      <Component />,
    // </AppContainer>,
    document.getElementById("root")
  );
};

render(RootContainer);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
