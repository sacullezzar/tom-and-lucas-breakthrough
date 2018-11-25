import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() { //

  }

  render() {
    return (
      <div className='container'>
        <div className='button'>
          <button type="button">Show All Notes</button>
        </div>
      </div>
    );
  }
}

export default Button;
