let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  age: {
    type: String,
    default: 0,
  },
});
