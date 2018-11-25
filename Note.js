const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema({
  name: {
    type: String
  },
  quote: {
    type: String
  }
},{
  collection: 'quotes'
})

const Noteform = mongoose.model('Note', Note)

module.exports = Noteform
