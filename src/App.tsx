import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        
      </Provider>
    </div>
  );
}

export default App;
