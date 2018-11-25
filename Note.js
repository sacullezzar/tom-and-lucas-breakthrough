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

module.exports = mongoose.model('Note', Note)
