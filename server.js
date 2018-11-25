const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 5000;

const config = require('./db')

mongoose.connect(config.DB, {useNewUrlParser: true })
  .then(() => {
    console.log('database is connected')
  })
  err => {
    console.log('Cannot connect to database' + err)
  }



app.get('/api/notes', (req, res) => {
  const notes = [
    {id: 1, body: 'Doe'},
    {id: 2, body: 'Smith'},
    {id: 3, body: 'Swanson'}
  ]

  res.json(notes);
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
