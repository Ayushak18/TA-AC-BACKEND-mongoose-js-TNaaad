let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: String,
  },
  { timestamps: true }
);

let Article = Schema.model('article', articleSchema);

module.exports = Article;
