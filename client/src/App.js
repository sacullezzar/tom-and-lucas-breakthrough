import React, { Component } from 'react';
import logo from './pickle_rick_rab.svg';
import './App.css';
import Notes from './containers/notesList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            "Look Tom, I'm a pickle!"
          </p>
          <a
            className="App-link"
            href="http://www.rickandmorty.com"
            target="http://www.rickandmorty.com"
            rel="noopener noreferrer"
          >
            WubbaLubbaDubDuuuub!
          </a>
        </header>
        <Notes />
      </div>
    );
  }
}

export default App;
