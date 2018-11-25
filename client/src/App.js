import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './pickle_rick_rab.svg';
import './App.css';
import NotesList from './containers/notesList.js'
// import Button from './components/button'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Show all notes' : <NotesList />}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      [<div className="App">
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
      </div>,
      <div id='listing'>
      <Button />
    </div>]
    );
  }
}

export default App;
