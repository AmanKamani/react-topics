import React, { isValidElement, useCallback, useMemo, useState } from 'react'
import TitleComponent from '../../common/title.component';

function UseMemoHook() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    /**
     * The below function checks for counterOne is even or odd.
     * Now, when we click on Counter1 & Counter2 it takes time to reflect the UI. As the loop will take time
     * For Counter1 Click delay is fine. As Counter1 state is getting changed.
     * But For Counter2 click delay is not good. As we are changing Counter2 state.
     * So, by using useMemo, it will cache the result of the function, And removes the delay for Counter2 click.
     */
    // const isCounterOneEven = () => {
    //     let i = 0;
    //     while(i< 2000000000) i++;
    //     return counterOne % 2 === 0
    // }

    const isCounterOneEven = useMemo(() => {
        let i = 0;
        while(i< 2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])

    return (<>
        <TitleComponent title="useMemo Hook" />
        <p>CounterOne - {counterOne} : <span>{isCounterOneEven ? 'Even' : 'Odd'}</span></p>
        <button onClick={incrementCounterOne}>Increment CounterOne</button>
        <br />
        <p>CounterTwo - {counterTwo}</p>
        <button onClick={incrementCounterTwo}>Increment CounterTwo</button>
    </>)
}

export default UseMemoHook