import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounterComponent from './components/hoc/click-counter.component';
import HoverCounterComonent from './components/hoc/hover-counter.component';
import ClickCounterComponent2 from './components/render-props/click-counter.component';
import HoverCounterComponent2 from './components/render-props/hover-counter.component';
import CounterPropComponent from './components/render-props/counter-prop.component';

function App() {
  return (
    <div className="App">
       {/* HOC  */}
      <h4>With HOC</h4>
      <ClickCounterComponent />
      <HoverCounterComonent />

      <hr />

      {/* Render Props */}
      <h4>With Render Props</h4>
      
      <CounterPropComponent 
        render={(count: number, incrementCount: () => void) => 
          <ClickCounterComponent2 
            count={count}
            incrementCount={incrementCount} />
        }
      />
      <CounterPropComponent 
        render={(count: number, incrementCount: () => void) => 
          <HoverCounterComponent2 
            count={count}
            incrementCount={incrementCount} />
        }
      />
    </div>
  );
}

export default App;
