import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent1 from './components/func-comp-1';
import ClassComponent1 from './components/class-comp-1';

function App() {
  return (
    <div className="App">
      <FunctionComponent1 name="React"/>
      <ClassComponent1 name="Reactttt" incrementBy={2}/>
    </div>
  );
}

export default App;
