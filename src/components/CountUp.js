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

// Destructuring

const {PI, E, SQRT2} = Math;

const circle = {
    label: 'circleX',
    radius: 2,
};

const CircleArea = ({radius}, {precision = 2} = {}) =>
    (PI * radius * radius).toFixed(precision);

console.log(CircleArea(circle, { precision: 5 }));

// Destructuring Arrays


function App() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter*2);
    return (
        <>
            <h1>{count}</h1>
            <Button increment={incrementCounter} />
            <Display message={counter}/>
            <CircleArea radius={circle.radius} />
        </>
    );
}

export function Add() {
    return (
        <App />
    );
}
