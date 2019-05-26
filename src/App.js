import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root'
import Dictation from './components/Dictation'

function App() {
  return (
 
   <Dictation />
  
  );
}
console.log("node env", process.env.NODE_ENV)
export default process.env.NODE_ENV === "development" ? hot(App) : App
