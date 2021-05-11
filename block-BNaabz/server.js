let express = require('express');
let mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/NewBase',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database connected');
    }
  }
);

let app = express();

app.listen(3000, () => {
  console.log('Server is up and running');
});
