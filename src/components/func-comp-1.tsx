import React, { useState } from "react";

/**
function FunctionComponent1(props: any) {
    // for single tag, no need of brackets
    return <p>
            Hello <b><u>{props.name}</u></b> from Function Component.
        </p>
}
 */

// or

const FunctionComponent1 = (props: any) => {

    // to use state for functionComponent we have to use the hook called useState

    return <p>
        Hello <b><u>{props.name}</u></b> from Function Component.
    </p>
}

export default FunctionComponent1;
