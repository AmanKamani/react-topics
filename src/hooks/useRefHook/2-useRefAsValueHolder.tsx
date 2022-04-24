import React, { useEffect, useRef, useState } from 'react'

function UseRefAsValueHolder() {

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(0);

    // useRef to hold the setInterval function
    // so, that it can be used on stop button click
    const intervalRef = useRef<any>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [flag]);

    return (<>
        <h4>
            useRef as a Value Holder <br />
            (saving interval function as a ref)
        </h4>

        <h6>Count - {count}</h6>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Counter</button>
        <button onClick={() => setFlag(flag + 1)}>Continue Counter</button>
    </>);


}

export default UseRefAsValueHolder