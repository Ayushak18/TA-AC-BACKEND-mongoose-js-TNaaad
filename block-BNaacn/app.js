let express = require('express');
let mongoose = require('mongoose');
// let article = require('./models/article');

mongoose.connect(
  'mongodb://localhost/Basic',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => (error ? console.log(error) : console.log('Database Connected'))
);

// article.create(
//   {
//     title: '7 Wonders',
//     description: 'Adding this book',
//     tags: ['Suspense', 'Intense'],
//     likes: 52,
//   },
//   (error, confirm) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Data written');
//     }
//   }
// );

let app = express();

app.listen(5000, () => console.log('Server up and running'));
