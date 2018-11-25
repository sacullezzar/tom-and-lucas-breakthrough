import React, { Component } from 'react';
import './notes.css';

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() { //
    fetch('/api/notes')
      .then(res => res.json())
      .then(notes => this.setState({notes}, () => console.log('notes fetched...', notes)));
  }

  render() {
    return (
      <div className='container'>
        <div className='noteList'>
          <h2>Notes</h2>
          <ul>
            {this.state.notes.map(note =>
              <li key={note.id}> { note.body }</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default NotesList;
