const express = require('express')
const NoteRouter = express.Router()

const Note = require('./Note')

NoteRouter.route('/create').post(function (req, res) {
  const note = new Note(req.quote)
  note.save()
  .then(note => {
    res.json('Note added Successfully')
  })
  .catch(err => {
    res.status(400).send('unable to save to database')
  })
})

module.exports = NoteRouter
