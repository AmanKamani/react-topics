import React, { useEffect, useState } from 'react'

function UseEffectMouseMove() {

    const [pointer, setPointer] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            console.log(`removing event listerner`);
            window.removeEventListener('mousemouve', onMouseMove);
        }
    }, []);

    const onMouseMove = (event: any) => {
        setPointer({x: event.clientX, y: event.clientY});
    };

    return (<>
        <p>X: {pointer.x}, Y: {pointer.y}</p>
    </>)
}

export default UseEffectMouseMove