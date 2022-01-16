import React from "react";

let count = Math.random();

function Hello () {
    // return <div>Hello React!</div>
    return React.createElement('div', null, "Hello React!!!!!");
}

export function Add () {
    return (
        <>
        <h1>{count}</h1>
        <Hello />
        </>
    )
}
