import React from 'react'

function Button(props: {handleClick: any, children: any}) {
    console.log(`render button: ${props.children}`)
    return (
        <button onClick={props.handleClick}>{props.children}</button>
    )
}

export default React.memo(Button)