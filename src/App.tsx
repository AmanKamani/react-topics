import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetFunctionComponent from './components/greet-function';
import GreetClassComonent from './components/greet-class';

function App() {
  return (
    <div className="App">
      <GreetFunctionComponent />
      <GreetClassComonent />
    </div>
  );
}

export default App;
