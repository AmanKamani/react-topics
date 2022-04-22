import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PortalComponent } from './components/portal.component';

function App() {
  return (
    <div className="App">
      Hi from div with <b>root</b> id
      <PortalComponent />
    </div>
  );
}

export default App;
