import React, { useState } from 'react'

function HookWithObject() {

    const [name, setName] = useState({firstname: "", lastname: ""});

    return (<>
        <h4>useState with Object type</h4>
        <input 
            placeholder='FirstName'
            type="text"
            value={name.firstname}
            onChange={(e) => setName({...name, firstname: e.target.value})} />
        <input
            placeholder='LastName'
            type="text"
            value={name.lastname}
            onChange={e => setName({...name, lastname: e.target.value})} />

        <p>State = {JSON.stringify(name)}</p>
    </>);
}

export default HookWithObject