import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// import { AppContainer } from 'react-hot-loader';

import RootContainer from "./App";
import { AppContainer } from "react-hot-loader";
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(RootContainer);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
