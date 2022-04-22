import React from 'react';

const FunctionComponent = (props:any) => {
    console.log(`function render`);
    return (
        <>
            <p>From Function Component = {props.name}</p>
        </>
    )
}

export default  React.memo(FunctionComponent);