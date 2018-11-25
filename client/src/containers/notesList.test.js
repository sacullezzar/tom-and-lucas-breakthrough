import React from 'react'
import { render } from 'react-testing-library'
import NotesList from './notesList'

describe ('Notes List', () => {
  it('renders the list of notes', () => {
    const { queryByText } = render(<NotesList />)
    const header = queryByText('Notes')
    expect(header.innerHTML).toBe('Notes')
  })
})
