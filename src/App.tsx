import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
        <hr />

      </Provider>
    </div>
  );
}

export default App;
