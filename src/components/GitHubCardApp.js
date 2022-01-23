import React from 'react';
import './GitHubCardApp.css';

class Card extends React.Component {
    render() {
        return (
            <div className='github-profile'>
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className='name'>Name here...</div>
                    <div className='company'>Company here...</div>
                </div>
            </div>
        );
    }
}

// Class Component
class GitHubCardApp extends React.Component {
    // constructor
    // this
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
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