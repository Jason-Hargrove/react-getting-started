import { useState } from 'react';

let count = Math.random();

function Button () {
    // a, b = useState()
    // a) state object (getter)
    // b) updater function (setter)
    const [counter, setCounter] = useState(5)

    return <button onClick={() => setCounter(counter*2)}>{counter}</button>
}

export function Add () {
    return (
        <>
        <h1>{count}</h1>
        <Button />
        </>
    )
}
