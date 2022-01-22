const title = "Template Strings";

const html = `
    <div>
        ${Math.random()}
    </div>
`;

// console.log(html);

export function TemplateStrings() {
    return (
        <>
            <h1>{title}</h1>
            {html}
        </>
    );
}