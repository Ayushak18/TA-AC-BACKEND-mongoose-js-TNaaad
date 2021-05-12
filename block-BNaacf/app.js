let express = require('express');

let mongoose = require('mongoose');

mongoose.connect(
  'mongodb://locahost/newFew',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    error ? `Error` : `Connected to Database`;
  }
);

let app = express();

app.listen(3000, () => console.log(`Server up`));
