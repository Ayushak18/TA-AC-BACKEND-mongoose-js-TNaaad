let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  password: { type: String, min: 5, max: 15 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
