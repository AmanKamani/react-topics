import React, { useEffect, useReducer } from 'react'

const initialState = {
    count: 0,
    interval: 1
};
class ActionType{
    constructor(public type: string,public value: number = 1){}
}
const reducer = (currentState: {count: number, interval: number}, action: ActionType)  => {
    const {count, interval} = currentState
    switch(action.type){
        case 'increment':
            return {
                ...currentState,
                count: count + interval
            };
        case 'decrement':
            return {
                ...currentState,
                count: count - interval
            };
        case 'reset':
            return initialState;
        case 'interval':
            return {
                ...currentState,
                interval: action.value
            }
        default:
            return currentState;
    }
}

function ObjectStateWithuseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

    })

    return (<>
        <h4>Object type state with useReducer</h4>
        
        <label>Interval: </label>
        <input 
            type="number"
            value={counter.interval}
            onChange={e => dispatch(new ActionType('interval', +e.target.value))} 
        />
        <p>count - {counter.count}</p>
        <button onClick={() => dispatch(new ActionType('increment'))}>Increment</button>
        <button onClick={() => dispatch(new ActionType('reset'))}>Reset</button>
        <button onClick={() => dispatch(new ActionType('decrement'))}>Decrement</button>

    </>);
}

export default ObjectStateWithuseReducer