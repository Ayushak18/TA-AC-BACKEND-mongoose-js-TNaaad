let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    village: String,
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Address = mongoose.model('Address', addressSchema);

module.exports = Address;
