import React from 'react';
import './App.css';
import ComponentA from './components/a-component';
import { UserProvider } from './components/user.context';

function App() {
  return (
    <div className="App">
      <UserProvider value={{username: "Jems Bond"}}>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
