let mongooose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  author: String,
  content: String,
});
