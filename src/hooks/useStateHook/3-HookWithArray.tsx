import React, { useState } from 'react'

function HookWithArray() {
    
    const [items, setItems] = useState<number[]>([]);
    
    const addItem = () => {
        const number = Math.floor(Math.random() * 10) + 1;
        setItems([...items, number]);
    }

    return (<>
        <h4>useState with Array</h4>
        <button onClick={addItem}>Add Item</button>
        <ul>
        {
            items.map(item => <li>{item}</li>)
        }
        </ul>
    </>);
}

export default HookWithArray