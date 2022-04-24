import { useState } from 'react'

function useCounterHook(initialValue: number = 0, interval: number = 1) {

    const [count, setCount] = useState(initialValue);

    const incrementCount = () => setCount(prevCount => prevCount + interval);

    const decrementCount = () => setCount(prevCount => prevCount - interval);

    const resetCount = () => setCount(initialValue);

    return [count, incrementCount, decrementCount, resetCount] as const;
}

export default useCounterHook