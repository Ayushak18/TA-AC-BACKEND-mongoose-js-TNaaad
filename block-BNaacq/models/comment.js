let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentsSchema = new Schema(
  {
    content: String,
    author: String,
    article: String,
  },
  { timestamps: true }
);

let Comment = Schema.model('comment', commentsSchema);

module.exports = Comment;
