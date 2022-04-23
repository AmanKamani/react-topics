import React, { useEffect, useState } from 'react'

function UseEffectIntervalCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        // here we should use setCount with prevState
        // as we are using interval, So, react can ignore the multiple state changes.
        // So, to avoid that we have to use this callback function in setCount.
        // otherwise we have to add [count] as second parameter of useEffect.
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        console.log(`starting interval`);
        const interval = setInterval(tick, 1000);

        return () => {
            console.log(`removing interval`);
            clearInterval(interval);
        };
    }, [])

    return (<>
        <h4>useEffect for auto time interval</h4>
        <h1>{count}</h1>
    </>)
}

export default UseEffectIntervalCounter