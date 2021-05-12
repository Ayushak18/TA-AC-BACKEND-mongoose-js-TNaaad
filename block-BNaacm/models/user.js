let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  author: Number,
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
