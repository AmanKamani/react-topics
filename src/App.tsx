import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import Usercontainer from './components/Usercontainer';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <hr />

        <HooksCakeContainer />
        <hr />

        <Usercontainer />
      </Provider>
    </div>
  );
}

export default App;
