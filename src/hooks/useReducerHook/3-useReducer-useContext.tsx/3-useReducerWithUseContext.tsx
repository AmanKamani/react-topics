import React, { useContext, useReducer } from 'react'
import ComponentA from './componentA';
import ComponentB from './componentB';
import "./style.css";

const initialState = 0;
const reducer = (currentState: number, action: string) => {
    switch(action){
        case "increment":
            return currentState + 1;
        case "decrement":
            return currentState - 1;
        case "reset":
            return initialState;
        default:
            return currentState;
    }
}
export const CounterContext = React
    .createContext<{state: number, stateDispatch?: React.Dispatch<string> }>(
        {state: initialState}
    );


function UseReducerWithUseContext() {

    const [count, dispatch] = useReducer(reducer, initialState);

    const heirarchy = `
    Component Heirarchy is:\n
    UseRecuderWithUseContext (Main State) \n
    \t|--- Component A\n
    \t|--- Component B\n
    \t\t|--- Component C\n
    \t\t|--- Component D\n
    `;
    return (<>
        <h4>
            useReducer with useConetxt <br/> 
            (passing state & dispatch of Reducer throgh ContextProvider )
        </h4>
        <pre>
            {heirarchy}
        </pre>

        <h5>Count : {count}</h5>
        <CounterContext.Provider value={{state: count, stateDispatch: dispatch}} >
            <ComponentA />
            <br/>
            <ComponentB />
        </CounterContext.Provider>
    </>)
}

export default UseReducerWithUseContext