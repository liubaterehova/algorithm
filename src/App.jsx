import React from 'react';
import './App.css'; // TODO: Own modules should be imported after all libraries modules
import 'antd/dist/antd.css';
import ArraysTable from './tasks/first/arrays-table';
import DatesList from './tasks/second/dates-list';
import TextFormatter from './tasks/third/TextFormatter';
import Calculator from './tasks/forth/Calculator';
import Converter from './tasks/six/Converter';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <Converter />
    </div>
  );
}
=======
// function App() {
//   return (
//     <div className="App">
//       <Arr />
//     </div>
//   );
// }

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);
>>>>>>> Stashed changes

export default App;
