import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState: number, action: string) => {
    switch(action){
        case 'increment':
            return currentState + 1;
            break;
        case 'decrement':
            return currentState - 1;
            break;
        case 'reset':
            return initialState;
            break;
        default:
            return currentState;
    }
}

function SimpleStateWithuseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (<>
        <h4>Simple State with number type</h4>
        <p>count - {count}</p>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
    </>);
}

export default SimpleStateWithuseReducer