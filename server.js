const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const NoteRoute = require('./NoteRoute')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())

const config = require('./db')

mongoose.connect(config.DB, {useNewUrlParser: true }).then(
  () => { console.log('database is connected') },
  err => { console.log('Cannot connect to database' + err)}
)

var db = mongoose.connection

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/quotes', NoteRoute)
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
app.get('/api/notes', cors(), function(req, res) {
  Note.find({}).then(eachOne => {
    res.json(eachOne);
    })
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
          res.send('note added successfully');
        });
      });
})
