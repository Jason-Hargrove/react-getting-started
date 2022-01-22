const log = console.log;

// Old and busted
// const fetchData = () => {
//     fetch('https://api.github.com').then(resp => {
//         resp.json().then(data => {
//             console.log(data);
//         });
//     });
// }

// New hotness
const fetchData = async () => {
    const resp = await fetch('https://api.github.com');

    const data = await resp.json();

    console.log(data);
}

log(fetchData());

export function Promises() {
    return (
        <>
            <h1>Promeses Are Groovy!</h1>
        </>
    );
}