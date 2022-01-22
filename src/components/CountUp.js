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

//console.log(CircleArea(circle, { precision: 5 }));

// Destructuring Arrays
// const [first, second,, fourth] = [10, 20, 30, 40];
//console.log(fourth);

const [first, ...restOfItems] = [10, 20, 30, 40];
// console.log(first);
// console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

// console.log(temp1);
// console.log(typeof(temp1));
// console.log(temp2);
// console.log(person);
// console.log(typeof(person));

const newObj = {
    ...person
};

const newArr = [...restOfItems];

// console.log(newObj);
// console.log(newArr);




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
