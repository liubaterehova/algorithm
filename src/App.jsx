import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import ArraysTable from './tasks/first/arrays-table';
import DatesList from './tasks/second/dates-list';
import TextFormatter from './tasks/third/text-formatter';
import Calculator from './tasks/fourth/calculator';
import Converter from './tasks/six/Converter';

const App = () => (
  <div className="App">
    <Converter />
  </div>
);

export default App;
