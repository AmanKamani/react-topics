import { useState } from "react";

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // setCount(count + 1);
        
        // or
        // using prevState
        setCount(prevState => prevState + 1);
    }

    return (<>
        <h4>Normal useState with Counter</h4>
        <button onClick={incrementCount}>Clicked {count} Times</button>
    </>);
}

export default HookCounter;