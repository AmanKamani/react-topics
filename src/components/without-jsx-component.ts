import React from "react";

export function WithoutJSXComponent() {
    return React.createElement(
        "div",
        {
            style: {
                color: "red",
            }
        },
        React.createElement(
            "h4",
            null,
            "Without JSX"
        )
    );
}