import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/useStateHook/UseStateHook';
import UseEffectHook from './hooks/useEffectHook/useEffectHook';
import UseContextHook from './hooks/useContextHook/UseContextHook';
import UseReducerHook from './hooks/useReducerHook/useReducerHook';
import UseCallbackHook from './hooks/useCallbackHook/5-useCallbackHook';
import UseMemoHook from './hooks/useMemoHook/6-useMemoHook';
import UseRefHook from './hooks/useRefHook/useRefHook';
import CustomHooks from './hooks/customHooks/customHooks';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      
      {/* <UseEffectHook /> */}

      {/* <UseContextHook /> */}

      {/* <UseReducerHook /> */}

      {/* <UseCallbackHook /> */}

      {/* <UseMemoHook /> */}

      {/* <UseRefHook /> */}

      <CustomHooks />
    </div>
  );
}

export default App;
