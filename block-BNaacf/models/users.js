let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  favourite: [String],
  marks: [Number],
  address: {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
  },
});
