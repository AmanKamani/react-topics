import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './components/form.component';
import { RefComponent } from './components/refs/ref.component';
import { ParentComponent } from './components/refs/parent-child/parent.component';
import { ParentForwardComponent } from './components/refs/forwarding-ref-func/parent-forward.component';

function App() {
  return (
    <div className="App">
      <h4>Normal Form Component</h4>
      <FormComponent />
      <hr/>

      <h4>Noraml Ref Component</h4>
      <RefComponent />
      <hr/>

      <h4>Parent-Child Ref Components</h4>
      <ParentComponent />
      <hr/>

      <h4>Ref Forwarding with Function Component</h4>
      <ParentForwardComponent />
      <hr />
    </div>
  );
}

export default App;
