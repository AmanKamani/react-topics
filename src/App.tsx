import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LifecycleComponent } from './components/lifecycle.component';
import { StarComponent } from './components/error-boundry/star.component';
import { ErrorBoundryComponent } from './components/error-boundry/error-boundry.component';

function App() {
  return (
    <div className="App">
      <LifecycleComponent />

      <hr/>
      <h2>Error Boundry Example</h2>
      <StarComponent name="Ironman" />
      <StarComponent name="Spiderman" />
      <ErrorBoundryComponent>
        <StarComponent name="Joker" />
      </ErrorBoundryComponent>
    </div>
  );
}

export default App;
