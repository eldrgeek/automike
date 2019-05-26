import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and THEN save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
console.log("node env", process.env.NODE_ENV)
export default process.env.NODE_ENV === "development" ? hot(App) : App
