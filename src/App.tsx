import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent1 from './components/func-component1';
import ClassComponent1 from './components/class-component1';
import ClassEventWithState from './components/class-event-with-state';
import ParentComponent from './components/parent-child/parent-component';

function App() {
  return (
    <div className="App">
      <FunctionComponent1 />
      <ClassComponent1 />

      <br />
      <h4> Events With State </h4>
      <ClassEventWithState />

      <br />
      <h4>Parent Child</h4>
      <ParentComponent />
    </div>
  );
}

export default App;
