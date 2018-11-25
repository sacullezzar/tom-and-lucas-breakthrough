import React from 'react';
import {render, cleanup} from 'react-testing-library'
import ReactDOM from 'react-dom';
import App from './App';

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




// test('async test', async () => {
//   expect.assertions(1)
//   const result = await runAsyncOperation()
//   expect(result).toBe(true)
// })
