let count = Math.random();

function Hello () {
    return <div>Hello React!</div>
}

export function Add () {
    return (
        <>
        <h1>{count}</h1>
        <Hello />
        </>
    )
}
