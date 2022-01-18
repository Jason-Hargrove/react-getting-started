import { useState } from 'react';

let count = Math.random();

function Button ({ increment }) {
    //const handleClick = () => setCounter(counter*2);
    return (
        <button onClick={increment}>
            *2
        </button>
    );
}

// Display

function Display({ message }) {
    return (
        <div>{message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter*2);
    return (
        <>
            <h1>{count}</h1>
            <Button increment={incrementCounter} />
            <Display message={counter}/>
        </>
    );
}

export function Add() {
    return (
        <App />
    );
}
