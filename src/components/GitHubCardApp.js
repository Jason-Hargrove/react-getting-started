import React from 'react';
// import './GitHubCardApp.css';

// Random Color JavaScript style componet.
class ConditionalStyle extends React.Component {
    render() {
        return (
            <div style={{ color: Math.random() < 0.5 ? 'green' : 'red' }}>
                How do you like this?
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className='github-profile' style={{ margin: '1rem' }}>
                <img src="https://placehold.it/75" />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className='name' style={{ fontSize: '125%'}}>Name here...</div>
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
                <ConditionalStyle />
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