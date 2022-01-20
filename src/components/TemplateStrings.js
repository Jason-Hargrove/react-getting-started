const html = `<div>HI</div>`;
let title = "Template Strings"

export function TemplateStrings() {
    return (
        <>
            <h1>{title}</h1>
            {html}
        </>
    );
}