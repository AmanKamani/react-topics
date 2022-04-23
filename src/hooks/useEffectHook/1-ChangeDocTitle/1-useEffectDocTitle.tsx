import React, { useEffect, useState } from 'react'

function UseEffectDocTitle() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
    
    return (<>
        <h4>useEffect to change title</h4>
        <button onClick={() => setCount(count+1)}>Count {count}</button>    
    </>)
}

export default UseEffectDocTitle