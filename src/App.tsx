import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterComponent from './components/CounterComponent';
import UserListComponent from './components/UserListComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
        <hr />

        <UserListComponent />
        <hr />
      </Provider>
    </div>
  );
}

export default App;
