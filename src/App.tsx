import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/useStateHook/UseStateHook';
import UseEffectHook from './hooks/useEffectHook/useEffectHook';
import UseContextHook from './hooks/useContextHook/UseContextHook';
import UseReducerHook from './hooks/useReducerHook/useReducerHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      
      {/* <UseEffectHook /> */}

      {/* <UseContextHook /> */}

      <UseReducerHook />
    </div>
  );
}

export default App;
