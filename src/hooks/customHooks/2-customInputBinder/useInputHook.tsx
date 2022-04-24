import React, { useState } from 'react'

function useInput(initialValue: string | number) {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    }

    const bind = {
        value,
        onChange: (event: any) => setValue(event.target.value)
    };

    return [ value, bind, reset ] as const;
}

export default useInput