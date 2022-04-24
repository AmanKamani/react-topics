import React, { useContext } from 'react'
import { CounterContext } from './3-useReducerWithUseContext'

function ComponentD() {
    const context = useContext(CounterContext);
    const dispatch = context.stateDispatch!;
    return (<>
        <label>ComponentD : {context.state} </label>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
    </>)
}

export default ComponentD
