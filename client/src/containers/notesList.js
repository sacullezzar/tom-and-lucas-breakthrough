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
    fetch('/notes')
    .then(results => {
      console.log(results.json())
    })
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
