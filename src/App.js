import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        languages: [
            { name: 'React', votes: 0 },
            { name: 'Python', votes: 0 },
            { name: 'JavaScript', votes: 0 },
            { name: 'Java', votes: 0 },
        ],
    };

    onClick = (i) => {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;
        this.setState({ languages: newLanguages });
    };

    render() {
        return (
            <div className="ui-container">
                <div className="title">Vote Your Language!</div>
                <div className="container">
                    {this.state.languages.map((item, i) => (
                        <div key={i} className="language-container">
                            <div className="votes">{item.votes}</div>
                            <div className="name">{item.name}</div>
                            <div>
                                <button className="button" onClick={() => this.onClick(i)}>
                                    Click Here
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
