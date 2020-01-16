import React from 'react';
import './App.css'; // TODO: Own modules should be imported after all libraries modules
import 'antd/dist/antd.css';
import Arr from './tasks/first/Arr';
import Data from './tasks/second/Data';
import TextFormatter from './tasks/third/TextFormatter';
import Calculator from './tasks/forth/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
