import React from "react";
import "./App.css"; // TODO: Own modules should be imported after all libraries modules
import "antd/dist/antd.css";
import Arr from "./tasks/first/Arr";
import Data from "./tasks/second/Data";
import TextFormatter from "./tasks/third/TextFormatter";

function App() {
  return (
    <div className="App">
      <TextFormatter />
    </div>
  );
}

export default App;
