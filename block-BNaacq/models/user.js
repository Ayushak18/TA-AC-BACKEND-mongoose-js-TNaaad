let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

let User = Schema.model('user', userSchema);

module.exports = User;
