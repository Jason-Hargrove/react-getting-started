import './GitHubCardApp.css';

const GitHubCardApp = ({ title }) => {
    return (
        <>
            <div className="header">
                {title}
            </div>
        </>
    );   
}

export function CardApp() {
    return (
        <>
            <GitHubCardApp title="The GitHub Card App" />
        </>
    );  
}