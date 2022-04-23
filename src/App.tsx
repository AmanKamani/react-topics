import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/useStateHook/UseStateHook';
import UseEffectHook from './hooks/useEffectHook/useEffectHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      
      <UseEffectHook />
    </div>
  );
}

export default App;
