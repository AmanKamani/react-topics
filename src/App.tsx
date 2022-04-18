import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JSXComponent } from './components/jsx-component';
import { WithoutJSXComponent } from './components/without-jsx-component';

function App() {
  return (
    <div className="App">
      <JSXComponent />
      <WithoutJSXComponent />
    </div>
  );
}

export default App;
