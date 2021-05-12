let express = require('express');

let mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/SchemaBase2',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to Database');
    }
  }
);

let app = express();

app.listen(3000, () => {
  console.log('Server is up');
});
