import React from 'react';
import './GitHubCardApp.css';

// Class Component
class GitHubCardApp extends React.Component {
    // constructor
    // this
    render() {
        return <div className="header">{this.props.title}</div>
    }
}

// const GitHubCardApp = ({ title }) => {
//     return (
//         <>
//             <div className="header">
//                 {title}
//             </div>
//         </>
//     );   
// }

export default function CardApp() {
    return (
        <>
            <GitHubCardApp title="The GitHub Card App" />
        </>
    );  
}