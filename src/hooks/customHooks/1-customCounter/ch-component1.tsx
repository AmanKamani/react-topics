import React, { useEffect, useState } from 'react'
import useCounterHook from './useCounterHook';

function ChComponent1() {

    const [count, incrementCount, decrementCount, resetCount] = useCounterHook(0, 5);

    return (<>
        <h4>useCounter Custom Hook</h4>
        <p>Count : {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={decrementCount}>Decrement</button>
    </>);
}

export default ChComponent1