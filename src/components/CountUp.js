let count = Math.random();

function Button () {
    return <button>TEST</button>
}

export function Add () {
    return (
        <>
        <h1>{count}</h1>
        <Button />
        </>
    )
}
