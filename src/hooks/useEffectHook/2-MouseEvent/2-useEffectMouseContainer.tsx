import React, { useState } from 'react'
import UseEffectMouseMove from './useEffectMouseMove';

function UseEffectMouseContainer() {

    const [display, toggleDisplay] = useState(true);

    const toggleMouseMoveComponent = () => {
        toggleDisplay(!display);
    }

    return (<>
        <h4>useEffect to add/remove mouse move event</h4>
        <button onClick={toggleMouseMoveComponent}>Toggle Mouse Move</button>
        {
            display ? <UseEffectMouseMove /> : null
        }
    </>)
}

export default UseEffectMouseContainer