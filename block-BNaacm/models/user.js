let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  author: Number,
});

let Article = mongoose.model('Author', articleSchema);

module.exports = Article;
