let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SchemaBase', (error) => {
  console.log('Database Connected');
});

let app = express();

app.listen(3000, () => {
  console.log('Server is up');
});
