const GitHubCardApp = ({ title }) => {
    return (
        <>
        <div className="header">{title}</div>
        </>
    )
    
};

export function CardApp() {
    return (
        <>
            <GitHubCardApp title="Hi" />
        </>
    );  
}