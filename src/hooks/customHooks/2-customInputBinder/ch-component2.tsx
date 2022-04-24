import React, { useState } from 'react'
import useInput from './useInputHook';

function ChComponent2() {
    const [firstname, bindFnm, resetFnm] = useInput('');
    const [lastname, bindLnm, resetLnm] = useInput('');
    
    const onFormSubmit = (event: any) => {
        event.preventDefault();
        alert(`Hello ${firstname} ${lastname}`);
        resetFnm();
        resetLnm();
    }

    return (<>
        <h4>useInput Hook to bind value & onChange event</h4>

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Firstname"
                { ...bindFnm } />
            <br />
            <input
                type="text"
                placeholder="Lastname"
                {...bindLnm} />
            <br />
            <button type='submit'>Submit</button>
        </form>
    </>)
}

export default ChComponent2