import React from "react";
import logo from "./logo.svg";
import { Button } from "pjwtest";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button label="Button" onClick={() => {}} primary />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;

