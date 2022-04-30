import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInterval, decrementCount, incrementCount, reset } from '../redux/counter/counterSlice';
import { AppState } from '../redux/store';

function CounterComponent() {

    const { count, interval } = useSelector((state: AppState) => state.counter);
    const dispatch = useDispatch();

    return (<>
        <h4>Counter Component</h4> 
        <p>Count <b>{count}</b></p>
        <input 
            type="number"
            min={1}
            value={interval}
            onChange={e => dispatch(changeInterval(+e.target.value))}/> <br /><br />
        <button onClick={() => dispatch(incrementCount())}>Increment</button>
        <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </>)
}

export default CounterComponent