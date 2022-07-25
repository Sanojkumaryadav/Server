const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title : String,
  note : String,
  lable : String
})


const Notes = new mongoose.model('Notes', notesSchema);
module.exports = Notes;
