import React, { useRef } from 'react'

function UseRefFocus() {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current!.focus();
    }
    const clearFocusInput = () => {
        inputRef.current!.blur();
    }

    return (<>
        <h4>useRef to Focus/Blur input box</h4>
        <input type="text" ref={inputRef}/> <br/>
        <button onClick={focusInput}>Focus on Input</button>
        <button onClick={clearFocusInput}>Clear Focus</button>
    </>)
}

export default UseRefFocus