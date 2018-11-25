const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const NoteRoute = require('./NoteRoute')

const app = express();
const port = 5000;

const config = require('./db')

mongoose.connect(config.DB, {useNewUrlParser: true }).then(
  () => { console.log('database is connected') },
  err => { console.log('Cannot connect to database' + err)}
)

var db = mongoose.connection

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/quotes', NoteRoute)

app.get('/api/notes', (req, res) => {
  const notes = [
    {id: 1, body: 'Doe'},
    {id: 2, body: 'Smith'},
    {id: 3, body: 'Swanson'}
  ]

  res.json(notes);
})

app.post('/quote/add', (req, res, next) => {

        var note = {
          name: req.body.name,
          quote: req.body.quote
        };

        db.collection("quotes").save(note, (err, result) => {
          if(err) {
            console.log(err);
          }


          res.send('name added successfully');
        });
      });

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
