import React from "react";

export const ChildForwardingComponentRef = React.forwardRef<HTMLInputElement>((props, reference) => {
    return (<>
        <input placeholder="child component" ref={reference} />
    </>);
})