const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
 "tname":{
  required: true,
  type: String
 },
 "status":{
  type: Boolean
 }
})

module.exports = mongoose.model('task',taskSchema);